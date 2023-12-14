const fs = require('fs');

fs.writeFileSync('./filters.txt', '');

const ublockFilters = [
	// DESKTOP
	'www.youtube.com##ytd-app:has(#above-the-fold:has-text(//i))',
	'www.youtube.com##ytd-app:has(#inner-header-container:has-text(//i))',
	'www.youtube.com##ytd-compact-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-rich-item-renderer:has-text(//i)',
	'www.youtube.com##ytd-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-radio-renderer:has-text(//i)',
	'www.youtube.com###content-section:has-text(//i)',
	// MOBILE
	'm.youtube.com##.feed-item:has-text(//i)',
	'm.youtube.com##body:has(ytm-slim-video-metadata-section-renderer:has-text(//i))',
	'm.youtube.com##shorts-video:has-text(//i)',
	'm.youtube.com##.reel-item-endpoint:has-text(//i)',
];

const allBlockTexts = fs.readFileSync('block-texts.txt', 'utf-8');

allBlockTexts.split(/\r?\n/).forEach((line) => {
	ublockFilters.forEach((filter) => {
		if (line) fs.appendFileSync('filters.txt', `${filter.replace('//', `/${line}/`)}\n`);
	});
});

console.log('DONE!');
