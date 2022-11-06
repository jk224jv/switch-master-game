/**
 * SWITCH MASTER.
 * A railway train router game.
 *
 * Class Cities.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Possible origin and destination points for trains.
 */
 export class Cities {
  /**
   * Create a new list of cities.
   *
   * @param {cities[]} cities - { xCord: {number}, yCord: {number}, name: {string}, nameMarginX: {number}, nameMarginY: {number} }.
   */
  constructor (cities = []) {
    this.cities = cities
  }

  /**
   * Add a new city.
   *
   * @param {number} xCordinate - xCordinate.
   * @param {number} yCordinate - yCordinate.
   * @param {number[]} directions - possible directions in/out of city. 0:up, 1:down, 2:right-up, 3:left-down, 4:left, 5:right, 6:right-down, 7:left-up
   * @param {string} townName - name of city.
   * @param {number} nameOffsetX - name displayed at relative pos x.
   * @param {number} nameOffsetY - name displayed at relative pos y.
   */
   add (xCordinate, yCordinate, directions, townName, nameOffsetX = 0, nameOffsetY = 0) {
    this.cities.push({ xCord: xCordinate, yCord: yCordinate, direction: directions, name: townName, nameMarginX: nameOffsetX, nameMarginY: nameOffsetY })
  }
}