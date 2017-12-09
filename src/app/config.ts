import { day01_1, day01_2 } from './logic/day-1';
import { day02_1, day02_2 } from './logic/day-2';

interface ProgressItem {
  title: string;
  cls: string;
}

export const PROGRESS = {
  pending: (n: number) => ({ title: `#${n} Pending`, cls: 'red' }),
  inProgress: (n: number) => ({ title: `#${n} In progress`, cls: 'yellow' }),
  completed: (n: number) => ({ title: `#${n} Completed`, cls: 'green' })
};


export class Problem {
  progress: ProgressItem;
  fn: any;
  description: string;

  constructor(progress?, fn?, description?) {
    this.progress = progress || PROGRESS.pending(0);
    this.fn = fn || ((i) => false);
    this.description = description || null;
  }
}

export const APP_CONFIG = {
  title: 'Advent of Code',
  items: [
    {
      title: 'Day 1: Inverse Captcha',
      problems: [
        {
          progress: PROGRESS.completed(1),
          fn: day01_1,
          description: `
            <p>You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."</p>
            <p>It goes on to explain that you may only leave by solving a <u>captcha</u> to prove you're <u>not</u> a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.</p>
            <p>The captcha requires you to review a sequence of digits (your puzzle input) and find the <u>sum</u> of all digits that match the <u>next</u> digit in the list. The list is circular, so the digit after the last digit is the <u>first</u> digit in the list.</p>
            <p><strong>For example:</strong></p>
            <ul>
              <li>1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.</li>
              <li>1111 produces 4 because each digit (all 1) matches the next.</li>
              <li>1234 produces 0 because no digit matches the next.</li>
              <li>91212129 produces 9 because the only digit that matches the next one is the last digit, 9.</li>
            </ul>

          <p><strong>What is the solution to your captcha?</strong></p>`
        },
        {
          progress: PROGRESS.completed(2),
          fn: day01_2,
          description: `
        <h3>Story:</h3>
         <p>You notice a progress bar that jumps to 50% completion. Apparently, the door isn't yet satisfied, but it did emit a star as encouragement. The instructions change:</p>
         <p>Now, instead of considering the <u>next</u> digit, it wants you to consider the digit <u>halfway around</u> the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.</p>
         <p><strong>For example:</strong></p>
         <ul>
           <li>1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.</li>
           <li>1221 produces 0, because every comparison is between a 1 and a 2.</li>
           <li>123425 produces 4, because both 2s match each other, but no other digit has a match.</li>
           <li>123123 produces 12.</li>
           <li>12131415 produces 4.</li>
         </ul>
         <p><strong>What is the solution to your new captcha?</strong></p>`
        }
      ]
    },
    {
      title: 'Day 2: Corruption Checksum',
      problems: [
        {
          progress: PROGRESS.completed(1),
          fn: day02_1,
          description: `
            <p>As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"</p>
            <p>The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's <u>checksum</u>. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.</p>
            <p>For example, given the following spreadsheet:</p>
            <p class="mono-box">5 1 9 5<br>7 5 3<br>2 4 6 8</p>
            <ul>
              <li>The first row's largest and smallest values are 9 and 1, and their difference is <u>8</u>.</li>
              <li>The second row's largest and smallest values are 7 and 3, and their difference is <u>4</u>.</li>
              <li>The third row's difference is <u>6</u>.</li>
            </ul>
            <p>In this example, the spreadsheet's checksum would be <span class="mono-box">8 + 4 + 6 = 18</span>.</p>
            <p><strong><u>What is the checksum</u> for the spreadsheet in your puzzle input?</strong></p>
          `
        },
        {
          progress: PROGRESS.completed(2),
          fn: day02_2,
          description: `
            <p>"Great work; looks like we're on the right track after all. Here's a star for your effort." However, the program seems a little worried. Can programs be worried?</p>
            <p>"Based on what we're seeing, it looks like all the User wanted is some information about the <u>evenly divisible values</u> in the spreadsheet. Unfortunately, none of us are equipped for that kind of calculation - most of us specialize in bitwise operations."</p>
            <p>It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.</p>
            <p>For example, given the following spreadsheet:</p>
            <p class="mono-box">5 9 2 8<br>9 4 7 3<br>3 8 6 5</p>
            <ul>
              <li>In the first row, the only two numbers that evenly divide are <span class="mono-box">8</span> and <div class="mono-box">2</div>; the result of this division is <div class="mono-box">4</div>.</li>
              <li>In the second row, the two numbers are <span class="mono-box">9</span> and <span class="mono-box">3</span>; the result is <span class="mono-box">3</span>.</li>
              <li>In the third row, the result is <span class="mono-box">2</span>.</li>
            </ul>
            <p>In this example, the sum of the results would be <span class="mono-box">4 + 3 + 2 = 9</span>.</p>
            <p><strong>What is the <u>sum of each row's result</u> in your puzzle input?</strong></p>
          `
        }
      ]
    }
  ],

};
