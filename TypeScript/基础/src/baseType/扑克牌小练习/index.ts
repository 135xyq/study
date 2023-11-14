type suit = '梅花' | '方块' | '红桃' | '黑桃'
type Poker = {
  playingCardSuit: suit,
  point: number
}

function createPokers(): Poker[] {
  let pokerList: Array<Poker> = []
  const suitList = ['梅花', '方块', '红桃', '黑桃']
  for (let i = 1; i <= 13; i++) {
    pokerList.push({
      playingCardSuit: '梅花',
      point: i
    }, {
      playingCardSuit: '方块',
      point: i
    }, {
      playingCardSuit: '红桃',
      point: i
    }, {
      playingCardSuit: '黑桃',
      point: i
    })
  }
  return pokerList
}

function printPoker(poker: Poker[]): void {
  let result = "\n"

  poker.forEach((item, index) => {
    let str = item.playingCardSuit
    if (item.point <= 10) {
      str += item.point
    } else if (item.point === 11) {
      str += 'J'
    } else if (item.point === 12) {
      str += 'Q'
    } else {
      str += 'K'
    }
    result += str + '\t'
    if ((index +1) % 8 === 0) {
      result += '\n'
    }
  })

  console.log(result)
}

printPoker(createPokers())