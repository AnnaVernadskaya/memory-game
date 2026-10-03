import { cardsData } from './cards-data.js';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const buttonsHeaderActionsWrapper = document.createElement('div');
  buttonsHeaderActionsWrapper.classList.add('header__actions');

  const buttonNewGame = document.createElement('button');
  buttonNewGame.classList.add('button-new-game');
  buttonNewGame.type = 'button';
  buttonNewGame.textContent = 'New Game';

  const buttonLeaders = document.createElement('button');
  buttonLeaders.classList.add('button-leaders');
  buttonLeaders.type = 'button';
  buttonLeaders.textContent = 'Leaderboard';

  buttonsHeaderActionsWrapper.append(buttonNewGame, buttonLeaders);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header__title');
  headerTitle.textContent = 'Find a Pair';

  const headerStatsContainer = document.createElement('div');
  headerStatsContainer.classList.add('header__stats');

  const counterMovesWrapper = document.createElement('div');
  counterMovesWrapper.classList.add('counter');

  const counterMovesLabel = document.createElement('span');
  counterMovesLabel.classList.add('counter__label');
  counterMovesLabel.textContent = 'Moves:';

  const counterMoveValue = document.createElement('span');
  counterMoveValue.classList.add('counter__value', 'move-counter');
  counterMoveValue.textContent = '0';

  counterMovesWrapper.append(counterMovesLabel, counterMoveValue);

  const counterPairsWrapper = document.createElement('div');
  counterPairsWrapper.classList.add('counter');

  const counterPairsLabel = document.createElement('span');
  counterPairsLabel.classList.add('counter__label');
  counterPairsLabel.textContent = 'Pairs:';

  const counterPairValue = document.createElement('span');
  counterPairValue.classList.add('counter__value', 'pair-counter');
  counterPairValue.textContent = '0';

  const counterPairTotal = document.createElement('span');
  counterPairTotal.classList.add('counter__total');
  counterPairTotal.textContent = '/8';

  counterPairsWrapper.append(
    counterPairsLabel,
    counterPairValue,
    counterPairTotal
  );

  headerStatsContainer.append(counterMovesWrapper, counterPairsWrapper);

  header.append(
    buttonsHeaderActionsWrapper,
    headerTitle,
    headerStatsContainer
  );

  return header;
}

const header = createHeader();
document.body.prepend(header);

function createCard(cardData) {
  const cardItem = document.createElement('li');
  cardItem.classList.add('cards__item');

  const cardButton = document.createElement('button');
  cardButton.classList.add('card');
  cardButton.type = 'button';

  const cardBack = document.createElement('span');
  cardBack.classList.add('card__back');

  const cardBackImg = document.createElement('img');
  cardBackImg.src = './assets/images/bg-card.png';
  cardBackImg.alt = '';

  cardBack.append(cardBackImg);

  const cardFront = document.createElement('span');
  cardFront.classList.add('card__front');

  const cardFrontImg = document.createElement('img');
  cardFrontImg.src = cardData.image;
  cardFrontImg.alt = cardData.alt;

  cardFront.append(cardFrontImg);

  cardButton.append(cardBack, cardFront);
  cardItem.append(cardButton);

  return cardItem;
}


function createMain(cardsData) {
  const main = document.createElement('main');
  main.classList.add('main');

  const cardsList = document.createElement('ul');
  cardsList.classList.add('cards');

  cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    cardsList.append(card);
  });

  main.append(cardsList);

  return main;
}

const main = createMain(cardsData);
document.body.append(main);
