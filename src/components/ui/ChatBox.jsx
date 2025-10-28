import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, X, MessageCircle } from 'lucide-react';
import { faqs } from '../../data/faq';
import Button from '../ui/Button';

const faqOptions = ["Servicios", "Horario", "Ubicación", "Hablar con una persona"];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  //FAQ'S
  const handleFAQClick = (option) => {
    if (option === "Hablar con una persona") {
      window.open("https://wa.me/5493417514628", "_blank");
      return;
    }

    const userMessage = {
      id: Date.now(),
      text: option,
      sender: 'user',
      timestamp: new Date(),
    };

    const botMessage = {
      id: Date.now() + 1,
      text: faqs[option] || "Lo siento, no tengo información sobre eso.",
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        text: data.response || 'Lo siento, no pude procesar tu mensaje.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Lo siento, hubo un error. Por favor intenta nuevamente.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('es-AR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
        {!isOpen && (
        <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-sertic-blue to-sertic-cyan text-sertic-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
            aria-label="Abrir chatbot asistente virtual"
        >
            <Bot size={24} className="text-sertic-white" />
        </button>
        )}

      {/* Ventana de chat */}
      {isOpen && (
        <div className="bg-sertic-white rounded-lg shadow-2xl border border-sertic-gray/30 w-96 h-96 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-sertic-blue to-sertic-cyan text-sertic-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-sertic-white rounded-full p-1">
                <Bot className="text-sertic-blue" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-xs opacity-90">
                  {isLoading ? 'Escribiendo...' : 'En línea'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-sertic-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sertic-light">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-sertic-blue text-sertic-white rounded-br-none'
                      : 'bg-sertic-white text-sertic-black border border-sertic-gray/30 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="flex-shrink-0 text-sertic-blue mt-1" size={16} />
                    )}
                    <div>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-sertic-cyan/70' : 'text-sertic-gray'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <User className="flex-shrink-0 text-sertic-cyan mt-1" size={16} />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Indicador de carga */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-sertic-white border border-sertic-gray/30 rounded-lg rounded-bl-none px-4 py-2 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Bot className="text-sertic-blue" size={16} />
                    <Loader className="animate-spin text-sertic-gray" size={16} />
                    <span className="text-sm text-sertic-gray">Escribiendo...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Buttons */}
          <div className="border-t border-sertic-gray/30 bg-sertic-light px-4 py-2 flex flex-wrap gap-2 justify-center">
            {faqOptions.map((option) => (
              <Button
                key={option}
                onClick={() => handleFAQClick(option)}
                size="sm"
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-sertic-gray/30 p-4 bg-sertic-white">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 resize-none border border-sertic-gray/50 rounded-lg px-3 py-2 focus:outline-none 
             focus:border-sertic-blue min-h-[40px] max-h-[120px] text-sertic-black placeholder-sertic-gray"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-sertic-blue hover:bg-sertic-cyan disabled:bg-sertic-gray text-sertic-white rounded-lg px-4 py-2 transition-colors flex items-center justify-center"
              >
                {isLoading ? <Loader className="animate-spin" size={16} /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;