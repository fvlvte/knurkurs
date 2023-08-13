import { useState } from 'react';


export const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);


  const dropdown = () => {
    setIsOpen(true);
  };




  return (
    <div>
      <button onClick={dropdown}>
        {'Dlaczego kurs Fvlvte'}
      </button>
      {isOpen && (
        <div>
          <ul>
            <li><a href="#">BO MA DOSWIADCZENIE W NAUCE EGIRLI</a></li>
            <li><a href="#">BO MA FAJNE CZAPKI</a></li>
            <li><a href="#">Bo NIE BEDZIE ROBIL MULTILEVEL MARKETINGU</a></li>
            <li><a href="#">BO NIE BEDZIE ROBIL LIMITED TIME OFFER 12H KUP TERAZ</a></li>
            <li><a href="#">BO DOLACZYSZ DO NAJBARDZIEJ PRESTIZOWEGO DISCORDA TECHNOLOGII CODE: KNUROWNIA</a></li>
          </ul>
        </div>
      )}
    </div>
  )
};

