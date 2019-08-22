// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Yajinni, blazyb, fel1ne, Qbz, Zerotorescue, Abelito75, Anatta336 } from 'CONTRIBUTORS';
import { change, date } from 'common/changelog';

export default [
  change(date(2019, 8, 18), 'Corrected some global cooldown values related to catweaving.', [Anatta336]),
  change(date(2019, 8, 12), 'Added essence Lucid Dreams.', [blazyb]),
  change(date(2019, 6, 2), 'Enabled the QElive auto import link for stat values.', [Abelito75]),
  change(date(2019, 5, 26), 'Fixed a bug where Lively Spirit increased int gain on tab switch.', [Qbz]),
  change(date(2019, 4, 27), 'Fixed a bug where regrowths during innervate were used in clearcasting calculation.', [Qbz]),
  change(date(2019, 2, 20), 'Fixed a bug where Lifebloom showed an incorrect uptime value in fights with multiple resto druids.', [Zerotorescue]),
  change(date(2019, 2, 8), 'Grove Tending now has mastery healing included.', [blazyb]),
  change(date(2019, 2, 2), 'Int gain from extra rejuvenation duration from Autumn Leaves is added.', [blazyb]),
  change(date(2019, 2, 2), 'Fixed a minor bug with rampanth growth module.', [blazyb]),
  change(date(2019, 1, 14), 'Updated Lively spirit module to include the extra mana gained', [blazyb]),
  change(date(2019, 1, 14), 'Updated Autumn Leaves module to include the extra second on rejuvenation', [blazyb]),
  change(date(2018, 12, 16), 'Added support for Azerite trait Early Harvest', [Qbz]),
  change(date(2018, 12, 7), 'Improved regrowth values in the mana efficiency tab', [blazyb]),
  change(date(2018, 11, 26), 'Replace Mana usage statistics with new Mana effiency tab', [blazyb]),
  change(date(2018, 11, 15), 'Improved flourish module to discount overhealing, resulting in slightly lower values.', [blazyb]),
  change(date(2018, 11, 14), 'Added support for Azerite trait Rampant Growth', [blazyb]),
  change(date(2018, 11, 9), 'Added checklist and suggestions for WG with high initial overhealing.', [blazyb]),
  change(date(2018, 11, 7), 'Added support for random LB blooms in Photosynthesis.', [blazyb]),
  change(date(2018, 11, 6), 'Fixed a minor bug with Flourish module and ordering of event being skewed.', [blazyb]),
  change(date(2018, 10, 19), 'Updated bad Regrowth usage suggestions - using a regrowth with sufficent abundance stacks is not considered bad', [Qbz]),
  change(date(2018, 10, 17), 'Reintroduced Wild Growth average hit tracker.', [blazyb]),
  change(date(2018, 10, 17), 'Improved Tree of Life throughput calculation (Don\'t count rejuv mana savings if player has innervate).', [blazyb]),
  change(date(2018, 10, 17), 'Fixed some minor errors for the innervate module.', [blazyb]),
  change(date(2018, 10, 16), 'Added first version of module for premature rejuvenations with statistics and suggestions', [blazyb]),
  change(date(2018, 9, 24), 'Including Grove Tending in Flourish and Photosynthesis module.', [blazyb]),
  change(date(2018, 9, 24), 'Updated Photosynthesis module to use correct calculations.', [blazyb]),
  change(date(2018, 9, 22), 'Added module for tracking Abundance.', [blazyb]),
  change(date(2018, 9, 21), 'Added tracking of healing gained from Stonebark.', [blazyb]),
  change(date(2018, 9, 21), 'Added implementation of Azerite trait Lively spirit.', [blazyb]),
  change(date(2018, 9, 20), 'Added implementation of Azerite trait Synergistic Growth.', [blazyb]),
  change(date(2018, 9, 20), 'Added mana used doughnut chart (code taken from Hunter focus used module) to resto druid &amp; set icons for Uldir bosses (not headshots)', [fel1ne]),
  change(date(2018, 9, 20), 'Updated bad Regrowth usage suggestions - using a non clearcasting regrowth on low health target is not considered bad.', [blazyb]),
  change(date(2018, 9, 18), 'Added implementation of Azerite trait Waking Dream.', [blazyb]),
  change(date(2018, 9, 17), 'Added HoT part of tranquillity to all relevant modules. This will change the values in mastery stack, flourish module and stat tracker.', [blazyb]),
  change(date(2018, 9, 12), 'Added implementation of Azerite trait Grove Tending.', [blazyb]),
  change(date(2018, 9, 12), 'Added implementation of Azerite trait Autumn Leaves.', [blazyb]),
  change(date(2018, 9, 12), 'Added implementation of Azerite trait Fungal Essence.', [blazyb]),
  change(date(2018, 9, 12), 'Updated changes on rejuvenation mana cost from hotfix september 10th.', [blazyb]),
  change(date(2018, 9, 10), 'Cleanup of old references from Legion and new updates from BFA.', [blazyb]),
  change(date(2018, 7, 27), 'Spell, talent, and GCD update to spells for BFA.', [Yajinni]),
];
