import { day01_1, day01_2 } from './logic/day-1';
import { day02_1, day02_2 } from './logic/day-2';
import { day03_1, day03_2 } from './logic/day-3';

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
              <li><code>1122</code> produces a sum of <code>3</code> (<code>1</code> + <code>2</code>) because the first digit (<code>1</code>) matches the second digit and the third digit (2) matches the fourth digit.</li>
              <li><code>1111</code> produces <code>4</code> because each digit (all <code>1</code>) matches the next.</li>
              <li><code>1234</code> produces <code>0</code> because no digit matches the next.</li>
              <li><code>91212129</code> produces <code>9</code> because the only digit that matches the next one is the last digit, <code>9</code>.</li>
            </ul>

          <p><strong>What is the solution to your captcha?</strong></p>`
        },
        {
          progress: PROGRESS.completed(2),
          fn: day01_2,
          description: `
            <p>You notice a progress bar that jumps to 50% completion. Apparently, the door isn't yet satisfied, but it did emit a star as encouragement. The instructions change:</p>
            <p>Now, instead of considering the <u>next</u> digit, it wants you to consider the digit <u>halfway around</u> the circular list. That is, if your list contains <code>10</code> items, only include a digit in your sum if the digit <code>10/2 = 5</code> steps forward matches it. Fortunately, your list has an even number of elements.</p>
            <p><strong>For example:</strong></p>
            <ul>
              <li><code>1212</code> produces <code>6</code>: the list contains <code>4</code> items, and all four digits match the digit <code>2</code> items ahead.</li>
              <li><code>1221</code> produces <code>0</code>, because every comparison is between a <code>1</code> and a <code>2</code>.</li>
              <li><code>123425</code> produces <code>4</code>, because both <code>2s</code> match each other, but no other digit has a match.</li>
              <li><code>123123</code> produces <code>12</code>.</li>
              <li><code>12131415</code> produces <code>4</code>.</li>
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
            <pre><code>5 1 9 5
7 5 3
2 4 6 8</code></pre>
            <ul>
              <li>The first row's largest and smallest values are <code>9</code> and <code>1</code>, and their difference is <code>8</code>.</li>
              <li>The second row's largest and smallest values are <code>7</code> and <code>3</code>, and their difference is <code>4</code>.</li>
              <li>The third row's difference is <code>6</code>.</li>
            </ul>
            <p>In this example, the spreadsheet's checksum would be <code>8 + 4 + 6 = 18</code>.</p>
            <p><strong><u>What is the checksum</u> for the spreadsheet in your puzzle input?</strong></p>`
        },
        {
          progress: PROGRESS.completed(2),
          fn: day02_2,
          description: `
            <p>"Great work; looks like we're on the right track after all. Here's a star for your effort." However, the program seems a little worried. Can programs be worried?</p>
            <p>"Based on what we're seeing, it looks like all the User wanted is some information about the <u>evenly divisible values</u> in the spreadsheet. Unfortunately, none of us are equipped for that kind of calculation - most of us specialize in bitwise operations."</p>
            <p>It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.</p>
            <p>For example, given the following spreadsheet:</p>
            <pre><code>5 9 2 8
9 4 7 3
3 8 6 5</code></pre>
            <ul>
              <li>In the first row, the only two numbers that evenly divide are <code>8</code> and <code>2</code>; the result of this division is <code>4</code>.</li>
              <li>In the second row, the two numbers are <code>9</code> and <code>3</code>; the result is <code >3</code>.</li>
              <li>In the third row, the result is <code>2</code>.</li>
            </ul>
            <p>In this example, the sum of the results would be <code>4 + 3 + 2 = 9</code>.</p>
            <p><strong>What is the <u>sum of each row's result</u> in your puzzle input?</strong></p>`
        }
      ]
    },
    {
      title: 'Day 3: Spiral Memory',
      problems: [
        {
          progress: PROGRESS.inProgress(1),
          fn: day03_1,
          description: `
            <p>You come across an experimental new kind of memory stored on an infinite two-dimensional grid.</p>
            <p>Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:</p>
            <pre><code>17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...</code></pre>
            <p>While this is very space-efficient (no squares are skipped), requested data must be carried back to square <code>1</code> (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square <code>1</code>.</p>
            <p>For example:</p>
            <ul>
              <li>Data from square <code>1</code> is carried <code>0</code> steps, since it's at the access port.</li>
              <li>Data from square <code>12</code> is carried <code>3</code> steps, such as: down, left, left.</li>
              <li>Data from square <code>23</code> is carried only <code>2</code> steps: up twice.</li>
              <li>Data from square <code>1024</code> must be carried <code>31</code> steps.</li>
            </ul>
            <p><strong><u>How many steps</u> are required to carry the data from the square identified in your puzzle input all the way to the access port?</strong></p>`
        },
        {
          progress: PROGRESS.pending(2),
          fn: day03_2,
          description: `

          `
        }
      ]
    }
  ],

};
