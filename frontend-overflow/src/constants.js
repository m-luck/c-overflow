import selectors from "./selectors/selectors"

export const colors = {
    orange: '#fb9a37',
    blue: '#98cbcb',
    pink: '#FFcbcb',
    green: '#669934',
    nightOrange: '#ffcb99',
    nightBlue: '#336667',
    softWhite: '#F6F6F6',
}

export const API_SUBMISSION_URL = "https://overflowstorage-0ba2.restdb.io/rest/submissions"
export const API_SUBMISSION_BACKUP_URL = "http://overflowstorage-0ba2.restdb.io/rest/submissionBackups"

// Redux Form Keys
export const SLIDERS_FORM_KEY = 'SLIDERS_FORM'

// Sliders
export const DEFAULT_MIN = 0
export const DEFAULT_MIN_PLUS = 4
export const DEFAULT_MID = 16
export const DEFAULT_MAX_MINUS = 30
export const DEFAULT_MAX = 32
const generate_config = (min, max, fresh, marks, item, sectionTitle, slug) =>
        ({ min, max, fresh, marks, item, sectionTitle, slug })
const BREATHING_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MID, "Difficult"],
            [DEFAULT_MAX_MINUS, "Incapacitated"],
        ],
        'Breathing',
    )
const COUGH_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "None"],
            [DEFAULT_MIN_PLUS, "Once Per Hour"],
            [DEFAULT_MID, "Once Per Half Hour"],
            [DEFAULT_MAX_MINUS, "Once+ Per Minute"],
        ],
        'Coughing',
    )
const HEADACHE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "None"],
            [DEFAULT_MIN_PLUS, "Small"],
            [DEFAULT_MID, "Average"],
            [DEFAULT_MAX_MINUS, "Above Average"],
        ],
        'Headache'
    )
const FATIGUE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MAX_MINUS, "Incapacitated"],
        ],
        'Fatigue'
    )
const FEVER_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN_PLUS,
        [
            [DEFAULT_MIN, "Hypo- (<98.6)"],
            [DEFAULT_MIN_PLUS, "None (~98.6)"],
            [DEFAULT_MID, "High (~101)"],
            [DEFAULT_MAX_MINUS, "Very High (105+)"],
        ],
        'Fever'
    )
const NOSE_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MIN_PLUS, "Small Sniffling"],
            [DEFAULT_MID, "Very Runny"],
            [DEFAULT_MAX_MINUS, "Nasally Blocked"],
        ],
        'Nose'
    )
const THROAT_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "Normal"],
            [DEFAULT_MID, "Sore"],
            [DEFAULT_MAX_MINUS, "Incapacitated"],
        ],
        'Throat'
    )
const VISITS_CONFIG = generate_config(0, 6,
        0,
        [ // This one is categorical
            [0, "Not Planning To"],
            [1, "Not Yet"],
            [2, "Called without Success"],
            [3, "Showed up without Success"],
            [4, "Awaiting Diagnosis Results"],
            [5, "Diagnosed, Deemed Fine"],
            [6, "Diagnosed, Deemed Ill"],
        ],
        '',
        'Hospital Visits',
        'visits'
    )
const WORRY_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN, "Relaxed"],
            [DEFAULT_MID, "Anxious"],
            [DEFAULT_MAX, "Fearful"],
        ],
        '',
        'Worry',
        'worry'

    )
const BELIEF_CONFIG = generate_config(DEFAULT_MIN, DEFAULT_MAX,
        DEFAULT_MIN,
        [
            [DEFAULT_MIN+1, "100% No"],
            [DEFAULT_MAX-1, "100% Yes"],
        ],
        '',
        'Do I individually believe I have COVID-19?',
        'Belief'
    )
export const sliderConfigs = [
    BREATHING_CONFIG,
    COUGH_CONFIG,
    HEADACHE_CONFIG,
    FATIGUE_CONFIG,
    FEVER_CONFIG,
    NOSE_CONFIG,
    THROAT_CONFIG,
    VISITS_CONFIG,
    WORRY_CONFIG,
    BELIEF_CONFIG,
]
export const sliderSectionListFormInitialValues = () => {
    let initialValues = {}
    sliderConfigs.forEach(config =>
        initialValues[selectors.getReduxFormFieldName(config)] = config.fresh
    )
    return initialValues
}
