import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { MemberListComponent } from './member-list/member-list.component'
import { MessagesComponent } from './messages/messages.component'
import { ListComponent } from './list/list.component'
import { AuthGuard } from './_guard/auth.guard'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [

            { path: 'members', component: MemberListComponent },
            { path: 'lists', component: ListComponent },
            { path: 'messages', component: MessagesComponent },

        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
]