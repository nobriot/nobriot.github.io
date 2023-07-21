// Constants
const COLLAPSABLE_SECTIONS = ["profile", "work_experience", "education", "skills", "hobbies"];

/**
 * Setup function that waits that the HTML document has been loaded
 */
function setup() {
    window.addEventListener("DOMContentLoaded", configure_onclick_callbacks, false);
}
setup();


/**
 * Attach onclick callbacks to all sections that can be clicked/collapsed in the page.
 * Reads the `COLLAPSABLE_SECTIONS` array
 */
function configure_onclick_callbacks() {
    for (var i = 0; i < COLLAPSABLE_SECTIONS.length; i++) {
        const title_id = COLLAPSABLE_SECTIONS[i] + "_title";
        const element_id = COLLAPSABLE_SECTIONS[i];
        document.getElementById(title_id).onclick = function() {
            toggle_visibility(element_id);
        }
    }
}


/**
 * Toggles the visibility of an element id in the document
 * Will also adjust the carret to point either downwards or to the right.
 * 
 * @param {String} element_id Element ID of the element to toggle
 * 
 */
function toggle_visibility(element_id) {

    console.log("Toggle visibility: " + element_id);
    const carret_id = element_id + "_caret";
    if (document.getElementById(element_id).style.display == 'none') {
        document.getElementById(element_id).style.display = 'block';
        document.getElementById(carret_id).className = 'fa-solid fa-caret-down';
    } else {
        document.getElementById(element_id).style.display = 'none';
        document.getElementById(carret_id).className = 'fa-solid fa-caret-right';
    }
}