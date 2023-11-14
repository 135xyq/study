enum suit1 {
  heart = '红桃',
  spade = '黑桃',
  club = '梅花',
  diamond = '方块'
}

enum point {
  one = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  twelve = 'Q',
  thirteen = 'K'
}

type Poker1 = {
  playingCardSuit: suit1,
  point: point
}

function createPokers1(): Poker1[] {
  let pokerList: Array<Poker1> = []
  const colors = Object.values(suit1)
  let pointList = Object.values(point)
  for (let i = 0; i < pointList.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      pokerList.push({
        playingCardSuit: colors[j],
        point: pointList[i]
      })
    }
  }
  return pokerList
}

function printPoker1(poker: Poker1[]): void {
  let result = "\n"

  for (let i = 0; i < poker.length; i++) {
    result += poker[i].playingCardSuit + poker[i].point + '\t'
    if ((i + 1) % 8 === 0) {
      result += '\n'
    }
  }
  console.log(result)
}

printPoker1(createPokers1())
