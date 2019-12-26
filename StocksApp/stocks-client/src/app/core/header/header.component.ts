import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
     this.navigateToDefaultUrl();
  }

  // On hitting logo it should reroute to default page
  navigateToDefaultUrl() {
    this.ngZone.run(() => this.router.navigateByUrl('/app-dashboard'));
  }

}
