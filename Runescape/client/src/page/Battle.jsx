/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../assets';

import styles from '../styles';
import { ActionButton, Alert, Card, GameInfo, PlayerInfo } from '../components';
import { useGlobalContext } from '../context';
import { rsattack,rsstrenght, attackSound, rsmagic,rsrange, defenseSound,main,adventure, player01 as player01Icon, player02 as player02Icon } from '../assets';
import { playAudio } from '../utils/animation.js';


const Battle = () => {

  const { contract, played,gameData,setPlayed,battleGround, walletAddress, setErrorMessage, showAlert, setShowAlert, player1Ref, player2Ref,outfit } = useGlobalContext();
  const [player2, setPlayer2] = useState({});
  const [player1, setPlayer1] = useState({});
  const { battleName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {


    const getPlayerInfo = async () => {
      try {
        
        let player01Address = null;
        let player02Address = null;

        if (gameData.activeBattle.players[0].toLowerCase() === walletAddress.toLowerCase()) {
          player01Address = gameData.activeBattle.players[0];
          player02Address = gameData.activeBattle.players[1];
        } else {
          player01Address = gameData.activeBattle.players[1];
          player02Address = gameData.activeBattle.players[0];
        }

        
     

        const p1TokenData = await contract.getPlayerToken(player01Address);
        const player01 = await contract.getPlayer(player01Address);
        const player02 = await contract.getPlayer(player02Address);

 
        const p1H = player01.playerHealth.toNumber();
      
        const p2H = player02.playerHealth.toNumber();
  

        setPlayer1({ ...player01, health: p1H });
        setPlayer2({ ...player02, health: p2H});
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    if (contract && gameData.activeBattle) getPlayerInfo();
  }, [contract, gameData, battleName]);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (!gameData?.activeBattle) navigate('/');
    }, [2000]);

    return () => clearTimeout(timer);
  }, []);

  const makeAMove = async (choice) => {
    // playAudio(adventure);

    playAudio(choice === 1 ? attackSound : defenseSound);


    try {
      await contract.MeleeMageOrRange(choice, battleName, { gasLimit: 200000 });

      setPlayed(true);


      setShowAlert({
        status: true,
        type: 'info',
        message: `Initiating ${choice === 1 ? 'attack' : 'defense'}`,
      });
    } catch (error) {
      setErrorMessage(error);
    }


  };





  return (
    <div className={`${styles.flexBetween} ${styles.gameContainer} ${battleGround}`}>
      {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}

      <PlayerInfo player={player2} playerIcon={player02Icon} mt />

      <div className={`${styles.flexCenter} flex-col my-10`}>
        <Card
          card={player2}
          title={player2?.playerName}
          cardRef={player2Ref}
          playerTwo
        />

        <div className="flex items-center flex-row">
         
          <Card
            card={player1}
            
            // title={player1?.playerName}
            cardRef={player1Ref}
            restStyles="mt-3 "
            img1={allCards[localStorage.getItem('outfit')-1]}
            
          />




    <div className="flex items-center flex-col">



{played
            ? <h2 className='font-runescape  text-[26px] text-yellow-300'> Wait for your opponent ...</h2>
            : ""
        
            
      }

      <br></br>
    
    <div className="flex items-center flex-row">
     
          <ActionButton
            imgUrl={rsattack}
            handleClick={() => makeAMove(1)}
            restStyles="ml-6 hover:border-red-600"
          />
            <ActionButton
            imgUrl={rsrange}
            handleClick={() => makeAMove(2)}
            restStyles="ml-6 hover:border-red-600"
          />
           <ActionButton
            imgUrl={rsmagic}
            handleClick={() => makeAMove(3)}
            restStyles="ml-6 hover:border-yellow-400"
          />

        </div>
      </div>
      </div>
      </div>
      <PlayerInfo player={player1} playerIcon={player01Icon} />

      <GameInfo />
    </div>
  );
};

export default Battle;
