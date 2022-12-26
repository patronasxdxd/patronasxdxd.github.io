import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { Alert } from '../components';
import { outfits } from '../assets';
import { useGlobalContext } from '../context';

const Outfit = () => {
  const navigate = useNavigate();
  const { setBattleGround,setOutfit, setShowAlert, showAlert } = useGlobalContext();

  const handleBattleChoice = (ground) => {
    // setBattleGround(ground.id);
    setOutfit(ground.id);

    // localStorage.setItem('battleground', ground.id);
    localStorage.setItem('outfit', ground.id);

    setShowAlert({ status: true, type: 'info', message: `${ground.name} is battle ready!` });

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <div className={`${styles.flexCenter} ${styles.battlegroundContainer}`}>
      {showAlert.status && <Alert type={showAlert.type} message={showAlert.message} />}

      <h1 className={`${styles.headText} text-center`}>
        Choose your
        <span className="text-siteViolet"> Outift </span>
        
      </h1>

      <div className={`${styles.flexCenter} ${styles.battleGroundsWrapper}`}>
        {outfits.map((ground) => (
          <div
            key={ground.id}
            className={`${styles.flexCenter} h-96`}
            onClick={() => handleBattleChoice(ground)}
          >
            <img src={ground.image} alt="saiman" className={styles.battleGroundCardImg} />

            <div className="info absolute">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outfit;
