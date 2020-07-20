/**
 * Report is the root dictionary object of a report
 * @typedef {Object} A11yReport
 * @property 
 * @property {PhysicalAccess} mainEntrance - access characteristics of the main entrance
 * @property {PhysicalAccess} sideEntrance - access characteristics of the side entrance
 * @property {PhysicalAccess} rearEntrance - access characteristics of the rear entrance
 * @property {String} entranceNotes - free text describing how to enter and exit the place
 * @property {PhysicalAccess} internalAreas - physical accessibility of internal areas
 * @property {String} internalAreasNotes - free text describing internal areas
 * @property {Number} floors - positive integer number of levels in this place, if it's a building
 * @property {SeatingAccess} seating - boolean dictionary of seating types available
 * @property {String} seatingNotes - free text describing seating
 * @property {BathroomAccess} bathroom - { bathroom access dictionary },
 * @property {String} bathroomNotes - "free text describing bathroom",
 * @property {ParkingAccess} parking - { physical access dictionary },
 * @property {String} parkingNotes - "free text describing parking accessibility",
 * @property {SignageAccess} signage - { signage access dictionary },
 * @property {String} signageNotes - "free text describing signage accessibility",
 * @property {AudioMediaAccess} announcements - [list of audio access types],
 * @property {AudioMediaAccess} audioMedia - [list of audio access types],
 * @property {VisualMediaAccess} visualMedia - [list of visual access types],
 * @property {String} reporterIdentity - "name or pseudonym of author of this report",
 */

/**
 * Dictionary where each value is a boolean or null, describing the presence of physical accessibility features
 * @typedef {Object} PhysicalAccess
 * @property {boolean} staffOperatedWheelchairLift - a wheelchair lift that requires staff to operate
 * @property {boolean} userOperatedWheelchairLift - a wheelchair lift that can be operated independantly by a mobility aid user on their own
 * @property {boolean} streetAccessElevator - an elevator that opens on to a sidewalk or other open area
 * @property {boolean} internalOnlyElevator - an elevator which only opens indoors
 * @property {boolean} steepRamp - a steep ramp that is challenging to safely use with mobility aids
 * @property {boolean} accessibleRamp - an easy ramp that isn't overly steep, that features flat sections at reasonable intervals if it is longer than a few meters
 * @property {boolean} stairsWithOneRailing - stairs with one strong railing or railings too far apart to both be used by one person at the same time
 * @property {boolean} stairsWithTwoRailings - stairs with two railings that can both be reached by a single person to support their weight safely
 * @property {boolean} stairsWithNo-railings - stairs that do not have any strong usable railings
 * @property {boolean} tactileBumps - tactile bumps used appropriately to signal changes in terrain or danger
 * @property {boolean} highContrastFloorEdges - stairs and abrupt flooring changes are painted or otherwise indicated with high contrast material changes, making edges easy to recognise for visually impared people
 * @property {boolean} lowPerfume - this environment isn't unnecessarily contaminated with perfumes or artificial scents
 * @property {boolean} wellLit - this environment is well lit, with important objects, signage, and architecture easy to see
 * @property {boolean} dimlyLit - this environment is minimally lit, e.g. mood lighting
 */

/**
 * Dictionary where each value is a boolean or null, describing the presence of different types of seating options
 * @typedef {Object} SeatingAccess
 * @property {boolean} stools - seating which supports the butt, with no backrest
 * @property {boolean} chairsWithBacks - firm chairs that have backrests
 * @property {boolean} couchesWithBacks - soft chairs or couches that include a backrest
 * @property {boolean} reclinerChairs - soft chairs which can be adjusted in to a non-upright position
 * @property {boolean} fixedReclinedFirmChairs - a hard chair which is in a fixed reclined position
 * @property {boolean} fixedReclinedSoftChairs - a soft chair or lounge which is in a fixed reclined position
 */

/**
 * Dictionary where each value is a boolean or null, describing the presence of different types of signage accessibility
 * @typedef {Object} SignageAccess
 * @property {boolean} largePrint - text is large enough to be read with some vision imparement
 * @property {boolean} highContrast - text is very high contrast on signage
 * @property {boolean} braille - signage features braille dots within reach
 * @property {boolean} loudspeaker - signage features a button trigger or automatic announcements of it's message
 * @property {boolean} illumination - signage is lit with a spotlight or is a digital sign like a TV
 * @property {boolean} readableTypefaces - signage uses clear readable typefaces
 * @property {boolean} dyslexiaTypefaces - signage uses Dyslexia-friendly weighted typefaces
 */

/**
 * Dictionary where each value is a boolean or null, describing the presence of different types of audio access
 * @typedef {Object} AudioMediaAccess
 * @property {boolean} openCaptions - sonic media provides open captions any sighted person can read
 * @property {boolean} closedCaptionsViaHeadset - sonic media offers closed captions via a wireless headset
 * @property {boolean} closedCaptionsViaDisplay - sonic media offers closed captions via a display you can position in front of you as needed
 * @property {boolean} closedCaptionsViaApp - sonic media offers closed captions via an app you can operate on your own phone or tablet
 * @property {boolean} alternativeAudioTrackViaReciever - spoken content is available in a secondary language via a provided reciever device
 * @property {boolean} alternativeAudioTrackViaApp - spoken content is available in a secondary language via an app you can use on your own phone or tablet
 * @property {boolean} hearingLoop - a hearing loop or t-coil system is available for clearer audio pickup on hearing devices
 * @property {boolean} signLanguageInterpreter - sign language interpreters provide access to spoken word media
 * @property {boolean} lowBackgroundNoise - social or performance watching spaces use soft materials that absorb sound, so voices and other sound media are clearly recieved with minimal reverb and echo, and social talking is easy to hear
 */

/**
 * Dictionary where each value is a boolean or null, describing the presence of different visual media features
 * @typedef {Object} VisualMediaAccess
 * @property {boolean} openAudioDescription - visual content is audio described out loud for everyone to hear
 * @property {boolean} audioDescriptionViaReciever - visual content is audio described and available via a headset device this venue can supply
 * @property {boolean} audioDescriptionViaApp - visual content is audio described and available via an app you can download and use on your own phone or tablet
 * @property {boolean} highContrast - visual media is presented in high contrast
 * @property {boolean} enlarged - visual media is presented in a large format, like a movie screen
 * @property {boolean} shrunk - visual media is available in a small format, like a small display
 * @property {boolean} visuallyCalm - architecture and interior are designed in a visually calming way, without bright colored lights or unnecessary distracting moving images
 */

/**
 * Dictionary with boolean or null values, describing the presence of bathroom access features
 * @typedef {Object} BathroomAccess
 * @property {boolean} steplessEntry - bathroom is accessible without needing to get over a step or edge of any height
 * @property {boolean} wideDoor - door to access bathroom is wider than the an average door
 * @property {boolean} largeBathroom - accessible bathroom has plenty of space to turn a large wheelchair around in, without any doors getting in the way
 * @property {boolean} childChangeTable - a table is provided that can be used to swap the clothes on a child
 * @property {boolean} adultChangeTable - a large table is provided that can be used to swap clothes on an adult
 * @property {boolean} sinkAtSeatedHeight - sink is provided at a seated height comfortable for use on a wheelchair
 * @property {boolean} sinkWithinReach - a sink is provided within arms reach of toilet, so mobility aid users can fully wash and dry their hands before transfering back on to a mobility aid
 * @property {boolean} transferRailings - strong railings are provided around toilet, to aid transfering between toilet and a mobility aid via arms
 * @property {boolean} transferSling - a small ceiling crane with sling attachment aids mobility aid users in transfering to toilet without arm strength
 * @property {boolean} lowNoise - this bathroom doesn't have loud noises from hand dryers or similar devices used by other people at the same time, suitable for people with sound sensory sensitivities
 * @property {boolean} noPerfume - this bathroom does not have any kind of automatic perfume dispenser that may cause allergies
 * @property {boolean} airDryer - bathroom has an air dryer for drying washed hands
 * @property {boolean} towelDry - bathroom has towels for drying washed hands
 */