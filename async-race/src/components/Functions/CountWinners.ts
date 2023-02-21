import { getAllWinners } from '../API/API-winners';
import { counts, SERVICE_MESSAGES } from '../utils/constants';

export async function CountWinners(): Promise<number> {
  const data = await getAllWinners(1);
  const countWinners = data.count;
  const p = document.querySelector('.winners-count') as HTMLParagraphElement;
  p.innerHTML = `${SERVICE_MESSAGES.winners } (${countWinners})`;
  counts[1] = countWinners;
  return countWinners;
}
