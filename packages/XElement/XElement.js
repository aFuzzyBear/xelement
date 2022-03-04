/**
 *
 *   __  __ _____  _                                _
 *   \ \/ /| ____|| |  ___  _ __ ___    ___  _ __  | |_
 *    \  / |  _|  | | / _ \| '_ ` _ \  / _ \| '_ \ | __|
 *    /  \ | |___ | ||  __/| | | | | ||  __/| | | || |_
 *   /_/\_\|_____||_| \___||_| |_| |_| \___||_| |_| \__|
 *
 *   Web Component Generator For Astro v0.21
 *
 * @description XElement is a lightweight Web component generator for Astro
 * which allows you to specify which HMTL compliant you wish to generate. It
 * also allows for specialised delivery of JS to the Client, respecting
 * Astro's Islands ethos.
 *
 * @copyright 2021
 * @license GNU3 General Public License version 3
 * @author jonathantneal - https://github.com/jonathantneal
 * @author aFuzzyBear - https://github.com/aFuzzyBear
 *
 */

import XElement from './XElement.astro'

const toHyphenName = (name) => name.replace(/(?<=.)[A-Z]/g, '-$&').toLowerCase()

export default new Proxy(XElement, {
	get(target, name) {
		// pass through any existing properties or asynchronous `.then` check
		if (name in target || name === 'then') return target[name]

		return Object.assign(
			async (result, props, slots) => await target(
				result,
				{
					// pre-define the `@is` attribute, still allowing overrides
					'@is': toHyphenName(name),
					...props,
				},
				slots
			),
			// identify this function as an astro component
			{
				isAstroComponentFactory: true,
			}
		)
	},
})