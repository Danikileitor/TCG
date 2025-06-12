import { Routes } from '@angular/router';
import { ScryfallComponent } from './scryfall/scryfall.component';
import { ScryfallRandomComponent } from './scryfall/random/random.component';
import { AppComponent } from './app.component';

const baseTitle = "[DNK]{TCG}"

export const routes: Routes = [
    {
        path: 'scryfall', title: baseTitle + "[MTG]", component: ScryfallComponent, children: [
            {
                path: 'random', title: baseTitle + "[MTG - Random]", component: ScryfallRandomComponent
            }
        ]
    }
];