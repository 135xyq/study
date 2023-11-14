import {Poker2} from "./type";
import {point2, suit2} from "./enum";

export function createPokers(): Poker2[] {
  let pokerList: Array<Poker2> = []
  const colors = Object.values(suit2)
  let pointList = Object.values(point2)
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

export function printPoker(poker: Poker2[]): void {
  let result = "\n"

  for (let i = 0; i < poker.length; i++) {
    result += poker[i].playingCardSuit + poker[i].point + '\t'
    if ((i + 1) % 8 === 0) {
      result += '\n'
    }
  }
  console.log(result)
}