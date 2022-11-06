/**
 * SWITCH MASTER.
 * A railway train router game.
 *
 * Class Rails.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */


/**
 * Rails.
 */
 export class Rails {
  /**
   * Keeps track of the tracks.
   *
   * @param {object[]} tracks - { xCord: number, yCord: number, directions: nunber[], trackCharacter: number }.
   * @param {object[]} switches - { xCord: number, yCord: number, startingDirections: number[], trackCharacter: number, key: char{string} }.
   */
  constructor (tracks = [], switches = []) {
    this.switches = switches
    this.tracks = tracks
    // directions 0: up/down, 1:right-up / left-down, 2: left-right, 3:right-down/left-up
  }

  /**
   * Lay new tracks.
   *
   * @param {number} xOrigin - from x cordinate.
   * @param {number} yOrigin - from y cordinate.
   * @param {number} direction - 0:down, 1:up, 2:right-up, 3:left-down, 4:left, 5:right, 6:right-down, 7:left-up
   * @param {number} trackLength - how long is the track in characters?
   */
  addTracks (xOrigin, yOrigin, direction, trackLength) {
    for (let laidTracks = 0; laidTracks < trackLength; laidTracks++) {
      switch (direction) {
        case 0:
          this.tracks.push({ xCord: xOrigin, yCord: yOrigin + laidTracks, directions: [0, 1], trackCharacter: 0 })
          break
        case 1:
          this.tracks.push({ xCord: xOrigin, yCord: yOrigin - laidTracks, directions: [0, 1], trackCharacter: 0 })
          break
        case 2:
          this.tracks.push({ xCord: xOrigin + laidTracks, yCord: yOrigin - laidTracks, directions: [2, 3], trackCharacter: 1 })
          break
        case 3:
          this.tracks.push({ xCord: xOrigin - laidTracks, yCord: yOrigin + laidTracks, directions: [2, 3], trackCharacter: 1 })
          break
        case 4:
          this.tracks.push({ xCord: xOrigin - laidTracks, yCord: yOrigin, directions: [4, 5], trackCharacter: 2 })
          break
        case 5:
          this.tracks.push({ xCord: xOrigin + laidTracks, yCord: yOrigin, directions: [4, 5], trackCharacter: 2 })
          break
        case 6:
          this.tracks.push({ xCord: xOrigin + laidTracks, yCord: yOrigin + laidTracks, directions: [6, 7], trackCharacter: 3 })
          break
        case 7:
          this.tracks.push({ xCord: xOrigin - laidTracks, yCord: yOrigin - laidTracks, directions: [6, 7], trackCharacter: 3 })
          break
        default:
          break
      }
    }
  }

  /**
   * Lay new switch.
   *
   * @param {number} xCordinate - from x cordinate.
   * @param {number} yCordinate - from y cordinate.
   * @param {number[]} directions - [0:down, 1:up], [2:right-up, 3:left-down], [4:left, 5:right], [6:right-down, 7:left-up]
   * @param {string} keyChar - what keyboard key operate this switch?
   */
   addSwitch (xCordinate, yCordinate, directions, keyChar) {
    this.switches.push({ xCord: xCordinate, yCord: yCordinate, startingDirections: directions, trackCharacter: Math.floor(directions[0] / 2), key: keyChar })
  }
}