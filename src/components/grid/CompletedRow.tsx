import { getGuessStatuses } from '../../lib/statuses'
import { SolutionInfo } from '../../lib/words'
import { Cell } from './Cell'
import { Modifier } from './modifier'

type Props = {
  guess: string
  modifiers: Modifier
  solutionInfo: SolutionInfo
}

export const CompletedRow = ({ guess, modifiers, solutionInfo }: Props) => {
  const statuses = getGuessStatuses(guess, solutionInfo)

  const cells = guess.split('').map((letter, i) => (
    <div>
      <Cell
        key={i}
        value={letter}
        status={statuses[i]}
        modifier={modifiers[i]}
      />{' '}
    </div>
  ))
  return <div className="flex justify-center mb-1">{cells}</div>
}
