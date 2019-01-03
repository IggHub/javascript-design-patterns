## MV* Patterns

### Architectural patterns
1. MVC (Model-View-Controller)
2. MVP (Model-View-Presenter)
3. MVVM (Model-View-ViewModel)

#### MVC vs MVP vs MVVM
- MVP and MVVM = MVC's derivatives
- MVC:
  - View sits on top with Controller besides
  - Model sits below Controller
  - View knows about Controller and Controller knows about Model
  - Viww -> direct Model access
- MVP:
  - Controller is replaced with Presenter
  - View on top, Presenter next to View
  - Presenter sits next to View and Model
  - Presenter mediates actions between both
  - No binding mechanism for Views and ViewModels (but ViewModels don't exist here to begin with?)
    - I wonder if it is no-binding because it is 1-1
  - View implements interface, allowing Presenter to interact with View (what's interface here?)
  - Usually one-to-one mapping between Presenter and View
- MVVM:
  - View-specific subsets of Model
  - ViewModel contains state nad logic info
    - This avoids exposing entire Model to View (MVC exposes ENTIRE Model)
  - ViewModel is not required to reference a (specific) View (looks like ViewModel can be abstract and reusable for different Views)
  - View can bind to properties on ViewModel
  - ViewModel exposes data contained in Model (selectively) to View
  - Downside = high complexity

#### Knockout vs Backbone
- KnockoutJS for smaller app while backbone for larger (non-trivial)
