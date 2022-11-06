/**
 * SWITCH MASTER.
 * A railway train router game.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */

import { Cities } from './lib/Cities.js'
import { Rails } from './lib/Rails.js'
import { Trains } from './lib/Trains.js'

// Define template.
const template = document.createElement('template')
template.innerHTML = `
  <style>
    .jk224jvContainer {
      position: relative;
    }

    .jk224jvContainer,
    #tracks,
    #trains {
      width: 1024px;
      height: 768px;
    }

    .jk224jvContainer canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
  <div class="jk224jvContainer">
    <canvas id="tracks"></canvas>
    <canvas id="trains"></canvas>
  </div>
`

customElements.define('jk224jv-switch-master',
  /**
   * Represents a jk224jv-switch-master element.
   */
  class extends HTMLElement {
    /**
     * The graphics surfaces
     */
    #canvasBottom
    #canvasTop

    /**
     * Does what is says on the tin.
     */
    #settings

    /**
     * Sprite constants.
     */
    #sprite


    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.#settings = {
        trainLength: 3,
        tickTime: 2000 // ms
      }

      this.#sprite = {
        SPRITE_WIDTH: 32,
        SPRITE_HEIGHT: 32,
        BORDER_WIDTH: 0,
        SPACING_WIDTH: 0
      }

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get the button element in the shadow root.
      this.#canvasBottom = this.shadowRoot.querySelector('.jk224jvContainer #tracks')
      this.#canvasTop = this.shadowRoot.querySelector('.jk224jvContainer #trains')

      // Get the DPR and size of the canvas
      const dpr = window.devicePixelRatio
      const rect = this.#canvasBottom.getBoundingClientRect()

      // Set the "actual" size of the canvas
      this.#canvasBottom.width = rect.width * dpr
      this.#canvasBottom.height = rect.height * dpr
      this.#canvasTop.width = rect.width * dpr
      this.#canvasTop.height = rect.height * dpr

      // Set the "drawn" size of the canvas
      this.#canvasBottom.style.width = `${rect.width}px`
      this.#canvasBottom.style.height = `${rect.height}px`
      this.#canvasTop.style.width = `${rect.width}px`
      this.#canvasTop.style.height = `${rect.height}px`
      console.log(this.#canvasTop.width)
      console.log(this.#canvasTop.height)
    }



    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      // run cleanup.
      // remove all Timeouts.
      var id = window.setTimeout(function() {}, 0);

      while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
      }
    }

    /**
     * Main function.
     */
    main () {
      // Set up listners
      // -- keyboard listner here --

      // do initial render
      this.renderTracks()
      this.renderCities()

      // Start the gameengine.
      this.gameEngineLoop ()
    }

    /**
    * Main game-engine loop.
    * Every delay, update trains location and re-write to screen.
    */
    gameEngineLoop () {
      this.moveTrains()
      this.renderTrains()
      console.log('tick')
      const gameLoop = setTimeout(this.gameEngineLoop.bind(this), this.#settings.tickTime)
    }

    /**
    * Called after the element is inserted into the DOM.
    */
    connectedCallback () {
      this.main ()
    }

    /**
     * Renders Tracks to the canvas.
     */
    renderTracks() {
      // code here
    }

    /**
     * Renders Cities to the canvas.
     */
    renderCities() {
      // code here
    }

    /**
     * Render Trains to the canvas.
     */
    renderTrains() {
      // code here
    }

    /**
     * Calculate and save the locations of trains.
     */
    moveTrains () {
      // code here
    }

    spritePositionToImagePosition(row, col) {
    return {
        x: (
            this.#sprite.BORDER_WIDTH +
            col * (this.#sprite.SPACING_WIDTH + this.#sprite.SPRITE_WIDTH)
        ),
        y: (
          this.#sprite.BORDER_WIDTH +
            row * (this.#sprite.SPACING_WIDTH + this.#sprite.SPRITE_HEIGHT)
        )
    }
}
})
