/**
 * SWITCH MASTER.
 * A railway train router game.
 *
 * Class Trains.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */


/**
 * Class of trains.
 */
 export class Trains {
  /**
   * A set of trains in motion.
   */
  constructor () {
    this.trainsInPlay = []
  }

  /**
   * Add a new train.
   *
   * @param {object} startingLocation - {x: {number}, y: {number}}.
   * @param {number} startingDirection - 0:up, 1:down, 2:right-up, 3:left-down, 4:left, 5:right, 6:right-down, 7:left-up.
   * @param {object} target - {x: {number}, y: {number}}.
   */
  addTrain (startingLocation, startingDirection, target) {
    const locations = [startingLocation]
    for (let wagons = 1; wagons < settings.trainLength; wagons++) {
      locations.push({ x: 9999, y: 9999 }) // set to out of screen until reassigned in the motion engine.
    }
    // Train is built. Add it to the gameboard.
    this.trainsInPlay.push({ at: locations, direction: startingDirection, destination: target })
  }
}