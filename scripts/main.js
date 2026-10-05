import { cardsData } from './cards-data.js';

const state = {
  firstCard: null,
  secondCard: null,
  moves: 0,
  matchedPairs: 0,
};

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
    counterPairTotal,
  );

  headerStatsContainer.append(counterMovesWrapper, counterPairsWrapper);

  header.append(buttonsHeaderActionsWrapper, headerTitle, headerStatsContainer);

  return header;
}

function createCard(cardData) {
  const cardItem = document.createElement('li');
  cardItem.classList.add('cards__item');

  const cardButton = document.createElement('button');
  cardButton.classList.add('card');
  cardButton.type = 'button';
  cardButton.dataset.id = cardData.id;

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

  function openCard() {
    if (cardButton.classList.contains('card--open')) {
      return;
    } else if (state.firstCard !== null && state.secondCard !== null) {
      return;
    }

    cardButton.classList.add('card--open');
    if (state.firstCard === null) {
      state.firstCard = cardButton;
    } else {
      state.secondCard = cardButton;
      state.moves += 1;

      checkPair();

      const movesCounter = document.querySelector('.move-counter');
      movesCounter.textContent = state.moves;
    }
  }

  cardButton.addEventListener('click', openCard);

  return cardItem;
}

function checkPair() {
  if (state.firstCard.dataset.id !== state.secondCard.dataset.id) {
    setTimeout(() => {
      state.firstCard.classList.remove('card--open');
      state.secondCard.classList.remove('card--open');

      state.firstCard = null;
      state.secondCard = null;
    }, 1000);
  } else {
    state.matchedPairs += 1;

    const pairsCounter = document.querySelector('.pair-counter');
    pairsCounter.textContent = state.matchedPairs;

    state.firstCard = null;
    state.secondCard = null;
  }
}

function createMain(cardsData) {
  const main = document.createElement('main');
  main.classList.add('main');

  const cardsList = document.createElement('ul');
  cardsList.classList.add('cards');

  main.append(cardsList);

  cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    cardsList.append(card);
  });

  return main;
}

function shuffleCards(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const doubledCards = [...cardsData, ...cardsData];
const shuffledCards = shuffleCards(doubledCards);

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerLink = document.createElement('a');
  footerLink.classList.add('footer-link');
  footerLink.href = 'https://github.com/AnnaVernadskaya';
  footerLink.target = '_blank';
  footerLink.rel = 'noopener noreferrer';
  footerLink.textContent = '© 2026 Anna Vernadskaya';

  footer.append(footerLink);

  return footer;
}

const header = createHeader();
const main = createMain(shuffledCards);
const footer = createFooter();

document.body.prepend(header);
document.body.append(main, footer);
