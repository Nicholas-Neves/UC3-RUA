import { useState, useEffect } from 'react';
import styles from './typing.module.css';

var Typing = () => {
  var phrases = [
    "Shape novo ou recondicionado?",
    "Seu skate como novo!",
    "Restauração profissional",
    "Mais vida pro seu shape",
    "Economize, recondicione!",
    "Precisão no lixamento",
    "Camadas perfeitas de resina",
    "Shape alinhado e equilibrado",
    "Ressuscitamos seu skate"
  ];

  var [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  var [currentText, setCurrentText] = useState('');
  var [isDeleting, setIsDeleting] = useState(false);
  var [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    var type = () => {
      var fullText = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        // Pausa no final da frase
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    var timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <div className={styles.container}>
      <span className={styles.text}>{currentText}</span>
      <span className={styles.cursor}></span>
    </div>
  );
};

export default Typing;