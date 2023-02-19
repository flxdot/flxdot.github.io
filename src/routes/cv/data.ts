import type WorkExperience from './types';

import _experience from '$data/work-experience.json';
export let experience = _experience as WorkExperience[];

experience
	.sort((a, b) => a.start - b.start || (a.end ? a.end : 9999) - (b.end ? b.end : 9999))
	.reverse();
