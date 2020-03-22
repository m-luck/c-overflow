export const API_SUBMISSION_URL = "http://localhost:8000/api/submission/"

// Sliders
const DEFAULT_MIN = 0
const DEFAULT_MIN_PLUS = 10
const DEFAULT_MID = 50
const DEFAULT_MAX = 90
const generate_config = (min, max, marks, item) =>
        ({ min, max, marks, item })
const BREATHING_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MID, "Difficult"],
            [DEFAULT_MAX, "Incapacitated"],
        ],
        'Breathing'
    )
const COUGH_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "None"],
            [DEFAULT_MIN_PLUS, "Once Per Hour"],
            [DEFAULT_MID, "Once Per Half Hour"],
            [DEFAULT_MAX, "Once+ Per Minute"],
        ],
        'Cough'
    )
const HEADACHE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "None"],
            [DEFAULT_MIN_PLUS, "Small"],
            [DEFAULT_MID, "Average"],
            [DEFAULT_MAX, "Above Average"],
        ],
        'Headache'
    )
const FATIGUE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MAX, "Incapacitated"],
        ],
        'Fatigue'
    )
const FEVER_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Cold\nBelow 98.6"],
            [DEFAULT_MIN_PLUS, "Healthy\n98.6"],
            [DEFAULT_MID, "High\n102"],
            [DEFAULT_MAX, "Very High\n105+"],
        ],
        'Fever'
    )
const NOSE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MIN_PLUS, "Small Sniffling"],
            [DEFAULT_MID, "Very Runny"],
            [DEFAULT_MAX, "Nasally Blocked"],
        ],
        'Nose'
    )
const THROAT_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MID, "Sore"],
            [DEFAULT_MAX, "Incapacitated"],
        ],
        'Throat'
    )
const VISITS_CONFIG = generate_config(0, 5,
        [ // This one is categorical
            [0, "Not Planning To"],
            [1, "Not Yet"],
            [2, "Called without Success"],
            [3, "Showed up without Success"],
            [4, "Diagnosed, Deemed Fine"],
            [5, "Diagnosed, Deemed Ill"],
        ],
        ''
    )
const WORRY_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "Relaxed"],
            [DEFAULT_MID, "Anxious"],
            [DEFAULT_MAX, "Fearful"],
        ],
        ''
    )
const BELIEF_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        [
            [DEFAULT_MIN, "No"],
            [DEFAULT_MAX, "Yes"],
        ],
        ''
    )
