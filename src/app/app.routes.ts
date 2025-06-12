import { Routes } from '@angular/router';
import { ScryfallComponent } from './scryfall/scryfall.component';
import { ScryfallRandomComponent } from './scryfall/random/random.component';

const baseTitle = "[DNK]{TCG}"

export const routes: Routes = [
    {
        path: 'MTG', title: baseTitle + "[MTG]", component: ScryfallComponent, children: [
            {
                path: 'random', title: baseTitle + "[MTG - Random]", component: ScryfallRandomComponent
            }
        ]
    }
];