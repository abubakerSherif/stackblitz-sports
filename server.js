const express = require('express');
const { Participant } = require('./models'); // Import your Sequelize models
const { Competition, Volunteer, HealthIndicator, UmpireInfo, OtherSport, Language, Venue } = require('./models'); // Import your Sequelize models

const app = express();
const PORT = process.env.PORT || 3000;

// Route to list participants
app.get('/get', async (req, res) => {
    try {
        const participants = await Participant.findAll(
            {
                attributes: [
                    'preferredPlay',
                    'firstName',
                    'middleName',
                    'lastName',
                    'gender',
                    'role',
                    'email',
                    'mobileNumber',
                    'marketingOptIn',
                    'isHIdden',
                    'photographyConsent',
                    'yearsPlayed',
                    'schoolGrade',
                    'SSP',
                    'hasDisability',
                    'ambulanceCover',
                    'doNotSendEmail',
                    'registeredParticipantId',
                    'userId',
                    'dateOfBirth',
                    'childrenCheckExpiryDate',
                    'isUmpirePrerequisiteTrainingComplete',
                    'accreditationUmpireLevel',
                    'accreditationUmpireExpiryDate',
                    'associationLevel',
                    'accreditationCoachLevel',
                    'accreditationCoachExpiryDate',
                    'mergedUserId',
                    'membershipProduct',
                    'nonRegisteredParticipantId',
                    'identifyAs',
                    'countryOfBirth',
                    'heardyAboutCompetition',
                    'heardByOther',
                    'favouriteTeam',
                    'school',
                    'culture',
                    'occupation',
                    'externalUserId',
                    'existingMedicalCondition',
                    'regularMedication',
                    'disabilityCareNumber',
                    'disabilityType',
                    'injury',
                    'walkingSportInfo',
                    'membershipDivision',
                    'preferredPosition1',
                    'preferredPosition2',
                    'organisation',
                    'team',
                    'emergencyFirstName',
                    'emergencyLastName',
                    'childrenCheckNumber',
                    'emergencyContactNumber',
                    'postalCode',
                    'street1',
                    'suburb',
                    'state',
                    'country',
                ],
                include: [
                    {
                        model: Competition,
                        include: [
                            { model: Venue, attributes: ['name'], through: { attributes: [] } }
                        ]
                    }, {
                        model: Volunteer, as: 'volunteer', attributes: ['id', 'isActive', 'description']
                    },
                    {
                        model: HealthIndicator, as: 'healthIndicator', attributes: [
                            "chestPain",
                            "heartTrouble",
                            "bloodPressure",
                            "faintOrSpells",
                            "lowerBackProblem",
                            "physicalActivity",
                            "jointOrBoneProblem",
                            "pregnant"
                        ]
                    },
                    {
                        model: UmpireInfo, as: 'umpireInfo', attributes: ['isNewToUmpiring']
                    }, {
                        model: OtherSport, attributes: ['name'], through: { attributes: [] }, as: 'otherSport'
                    }, {
                        model: Language, attributes: ['name'], through: { attributes: [] }, as: 'languages'
                    }
                ],
                logging: console.log

            }
        ).then((data) => {
            const formattedData = data.map(item => {
                const itemData = item.toJSON(); // Convert Sequelize instance to plain object
                const preferredPlay = item.preferredPlay; // Assuming each item has only one post, adjust as needed
                const post = item.Competition; // Assuming each item has only one post, adjust as needed
                delete itemData.Competition;  // or delete person["age"];
                delete itemData.preferredPlay;  // or delete person["age"];
                if (post) {
                    return {
                        preferredPlay: preferredPlay.split(','),
                        competitionVenues: post.Venues,
                        ...itemData,
                        competitionName: post.competitionName,
                        competitionDivision: post.competitionDivision,
                        competitionStartDate: post.competitionStartDate,
                        competitionEndDate: post.competitionEndDate
                    };
                } else {
                    return data;
                }
            });

            return formattedData;
        })

            ; // Fetch all participants from the database
        res.json(participants); // Return participants as JSON response
    } catch (error) {
        console.error('Error fetching participants:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Return an error response if something goes wrong
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});