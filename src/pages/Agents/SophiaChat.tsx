import React, { useState, useRef } from 'react';
import { Plus, Mic } from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

interface ChatMessage {
  sender: 'user' | 'SophIA';
  message: string;
  sentTime: string;
}

const SophiaChat: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async (): Promise<void> => {
    const text = input.trim();
    if (!text) return;

    if (!isAuthenticated) {
      alert('Debes iniciar sesión para enviar mensajes.');
      return;
    }

    const userMsg: ChatMessage = {
      sender: 'user',
      message: text,
      sentTime: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setInput('');

    try {
      const response = await api.post('/api/chat', { message: text });
      const { reply } = response.data;

      const botMsg: ChatMessage = {
        sender: 'SophIA',
        message: reply,
        sentTime: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error: any) {
      console.error('Chat request failed', error);
      if (error.response?.status === 403) {
        alert('Acceso denegado: comprueba que hayas iniciado sesión.');
      }
    } finally {
      setIsTyping(false);
    }
  };

  const handleUploadClick = () => {
    alert('La funcionalidad de subir imágenes está deshabilitada por el momento.');
  };

  const handleMicClick = () => {
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta reconocimiento de voz.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => (prev ? prev + ' ' + transcript : transcript));
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 shadow-lg rounded-2xl border border-gray-200 overflow-hidden bg-sky-100">
      <div className="bg-sky-400 p-4 text-white font-semibold text-lg">
        Chat con SophIA
      </div>
      <div className="h-[600px] flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-xl px-4 py-2 max-w-sm text-sm shadow-md
                  ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border'}`}
              >
                <p>{msg.message}</p>
                <span className="text-xs text-gray-400 float-right">{msg.sentTime}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-sm text-gray-500 italic">SophIA está escribiendo...</div>
          )}
        </div>

        <div className="border-t p-4 bg-white flex items-center space-x-2">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            disabled
          />
          <button onClick={handleUploadClick} className="p-2 rounded-lg hover:bg-gray-200 transition">
            <Plus className="w-5 h-5 text-gray-500" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button onClick={handleMicClick} className="p-2 rounded-lg hover:bg-gray-200 transition">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SophiaChat;