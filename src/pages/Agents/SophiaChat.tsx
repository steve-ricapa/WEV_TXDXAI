import React, { useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

interface ChatMessage {
  sender: 'user' | 'SophIA';
  message: string;
  sentTime: string;
}

const SophiaChat: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (text: string): Promise<void> => {
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

    try {
      // Usar Axios (api) con el token adjunto automáticamente por el interceptor
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

  return (
    <MainContainer style={{ height: '600px' }}>
      <ChatContainer>
        <MessageList
          typingIndicator={
            isTyping ? <TypingIndicator content="SophIA está escribiendo..." /> : null
          }
        >
          {messages.map((msg, idx) => (
            <Message
              key={idx}
              model={{
                message: msg.message,
                sentTime: msg.sentTime,
                sender: msg.sender === 'user' ? 'Tú' : 'SophIA',
                direction: msg.sender === 'user' ? 'outgoing' : 'incoming',
                position: 'single',
              }}
            />
          ))}
        </MessageList>
        <MessageInput placeholder="Escribe un mensaje..." onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  );
};

export default SophiaChat;
