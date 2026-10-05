import { test } from 'node:test';
import assert from 'node:assert/strict';
import { emptyAnswers, normalizeAnswers, daysFromDates, dateWarning, itineraryDays } from '../lib/answers.ts';
import { cityForBase } from '../lib/weather.ts';

test('duration range controls itinerary without dates', () => {
  for (const [tripLength, count] of [['4–5 ימים', 5], ['6–7 ימים', 7], ['8–10 ימים', 10]]) {
    assert.equal(itineraryDays(normalizeAnswers({tripLength})), count);
  }
});
test('exact dates override duration and include arrival and departure', () => {
  const answers = normalizeAnswers({tripLength: '8–10 ימים', tripStartDate: '2026-10-28', tripEndDate: '2026-11-02'});
  assert.equal(itineraryDays(answers), 6);
  assert.equal(answers.tripLength, '6–7 ימים');
});
test('dates are validated across months and leap years', () => {
  assert.equal(daysFromDates('2028-02-28', '2028-03-01'), 3);
  assert.equal(daysFromDates('2026-02-29', '2026-03-05'), null);
  assert.equal(daysFromDates('2026-10-09', '2026-10-08'), null);
  assert.equal(daysFromDates('bad', '2026-10-08'), null);
});
test('invalid and unsupported durations warn without generating negative or excessive days', () => {
  for (const end of ['2026-10-01', '2026-10-10', '2026-11-05']) {
    const answers = normalizeAnswers({tripStartDate: '2026-10-10', tripEndDate: end, tripLength: '4–5 ימים'});
    assert.ok(dateWarning(answers));
    assert.equal(itineraryDays(answers), 5);
  }
  assert.equal(dateWarning(emptyAnswers()), '');
});
test('base choice determines weather city; combined or undecided stays flexible', () => {
  for (const [base, city] of [['סיינה', 'Siena'], ["קיאנטי / סן ג'ימיניאנו", 'San Gimignano'], ["ואל ד'אורצ'ה / פיינצה / מונטפולצ'יאנו", 'Pienza'], ['לוקה / פיזה', 'Lucca'], ['שילוב של שני אזורים', 'Florence'], ['', 'Florence']]) assert.equal(cityForBase(base), city);
});
