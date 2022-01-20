export const TOKEN = 'TOKEN';

export const POLICY_TYPE = {
    MEDICAL_AID: 'MEDICAL AID',
    LIFE_INSURANCE: 'LIFE INSURANCE'
};

export const AGREEMENTS = [
    {
        type: POLICY_TYPE.MEDICAL_AID,
        policyNumber: '6847747',
        monthlyPremiumAmount: 1518,
        optionName: 'Custom',
        hospitalCoverOption: 'Private',
        hasOutOfHospitalCover: true
    },
    {
        type: POLICY_TYPE.LIFE_INSURANCE,
        policyNumber: '0100215548',
        monthlyPremiumAmount: 947,
        lifeCoverBenefitAmount: 2000000,
        criticalIllnessCoverBenefitAmount: 1200000,
        disabilityCoverBenefitAmount: 1000000
    }
];
