import { animate, animateChild, AnimationMetadata, group, query, style, transition, trigger } from '@angular/animations';

const swipeLeft: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })]),
  query(':enter', [style({ left: '100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  ]),
];

const swipeRight: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })]),
  query(':enter', [style({ left: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  ]),
];

const fadeIn: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })]),
  query(':enter', [style({ opacity: '0' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ opacity: '0' }))]),
    query(':enter', [animate('300ms ease-out', style({ opacity: '1' }))]),
  ]),
];

export const slideInAnimation = trigger('routeAnimations', [
  transition('CharactersListPage => CharacterPage', swipeLeft),
  transition('CharacterPage <=> CountryPage', fadeIn),
  transition('* => CharactersListPage', swipeRight),
]);
