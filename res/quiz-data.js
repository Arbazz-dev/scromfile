const quizData = [
    {
        "type": "multiple-choice",
        "text": "Select all correct sentences for the control of the plug-in charger control system.",
        "options": [
            "If the door is opened with IG OFF during charging, the status is displayed indefinitely.",
            "When the charging cable is connected, the indicator illuminates.",
            "Alternating current from household outlet is fed to EV charger through AC inlet.",
            "EV charger converts AC to DC to charge the battery."
        ],
        "correct": "2|3|4",
        "feedback": "Correct Answers: 2, 3 and 4.<br>1 is incorrect because the status is displayed only for a certain period, not indefinitely."
    },
    {
        "type": "fill-blank",
        "text": "Select the appropriate terms to complete the process.",
        "content": "The plug-in ECU receives a signal and transmits a request to the [KEY1]. The battery ECU then drives the [KEY2].",
        "dropdownOptions": {
            "key1": [{"value":"", "text":"Select..."}, {"value":"battery ECU", "text":"battery ECU"}, {"value":"engine ECU", "text":"engine ECU"}],
            "key2": [{"value":"", "text":"Select..."}, {"value":"AC Relay", "text":"AC Charging Relay"}, {"value":"Inverter", "text":"Inverter"}]
        },
        "correct": { "key1": "battery ECU", "key2": "AC Relay" },
        "feedback": "The Plug-in ECU talks to the Battery ECU, which controls the AC Relay."
    }
]