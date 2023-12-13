const fs = require('fs');

fs.writeFileSync('./filters.txt', '');

const ublockFilters = [
	'www.youtube.com##ytd-app:has(#above-the-fold:has-text(//i))',
	'www.youtube.com##ytd-app:has(#inner-header-container:has-text(//i))',
	'www.youtube.com##ytd-compact-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-rich-item-renderer:has-text(//i)',
	'www.youtube.com##ytd-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-radio-renderer:has-text(//i)',
	'www.youtube.com###content-section:has-text(//i)',
];

const allBlockTexts = fs.readFileSync('block-texts.txt', 'utf-8');

allBlockTexts.split(/\r?\n/).forEach((line) => {
	ublockFilters.forEach((filter) => {
		fs.appendFileSync('filters.txt', `${filter.replace('//', `/${line}/`)}\n`);
	});
});

console.log('DONE!');
