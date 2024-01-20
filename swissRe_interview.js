// 1.1
say('Bob');
var message = 'hello, ';
function say (name) {
  console.log(message + name);
}

//1.2
var message;
var say;

say('Bob');
message = 'hello, ';
say = (name) => {
  console.log(message + name);
}

// hello, Bob
// undefinedBob
// Temporary Dead Zone


const a = { b: 1 };
a.b = 2; //?

reference - ?
  


// 2. 
 // ngOnChanges has performance implication due to CD cycle run son every change. cdRef.detectChanges() in ngOnChanges might execute in loop.
 // Instead use @Input() setter for any logic that we write inside ngOnChnages
// Also cdRef.detectChanges() should be avoided in ngOnChanges. It can used in ngAfterViewInit and ngAfterContentInit 
@Component({
  selector: 'app-test', // tag
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TestComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
  @Input() public input: any;

  public count = 0;
  public incremented = [];

  @ViewChild('panel') public panelElement: MatExpansionPanel;
  @ContentChild('hint') public hintElement: MatHint;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public ngOnChanges({ input }: SimpleChanges): void {
    if (input) {
      this.count += 1;
      this.incremented = input.currentValue.arr.reduce((res, curr) => {
        return [...res, curr + 1];
      }, []);
      this.cdr.detectChanges();
    }
  }

  public ngOnDestroy(): void {}
  public ngAfterViewInit(): void {}
  public ngAfterContentInit(): void {}
  public ngOnInit(): void {}
}



// 3
@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(private readonly httpClient: HttpClient) {}

  public getUserWithAddresses(id: number): Observable<IUser> {
    // was aked to write below line
	return this.httpClient.get(backendURL/id, {params:id}).pipe(map((user) => user.firstName + user.lastName));
  }
}