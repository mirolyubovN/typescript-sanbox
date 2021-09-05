enum Membership {
	Simple,
	Standard,
	Premium
};

const membership = Membership.Simple; // returns 0
const membershipReverse = Membership[0]; // returns Simple

enum SocialMedia {
	VK = 'VK',
	FB = 'FB',
	IG = 'IG'
}

const social = SocialMedia.IG //returns IG
