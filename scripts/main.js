console.log('hi');

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

