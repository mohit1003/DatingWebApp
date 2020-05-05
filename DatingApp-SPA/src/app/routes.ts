import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [

            { path: 'members', component: MemberListComponent },
            { path: 'members/:id', component: MemberDetailsComponent, resolve: { user: MemberDetailResolver } },
            { path: 'lists', component: ListComponent, resolve: { users: MemberListResolver } },
            { path: 'messages', component: MessagesComponent },

        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
]