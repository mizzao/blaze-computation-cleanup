blaze-computation-cleanup
=========================

Description of bug related to meteor/meteor#2023 and meteor/meteor#2031

To reproduce:

- A template is put on the page manually with `UI.render`, causing reactive computations to be started for two helpers.
- Click the button to invalidate this computation, and see that both helpers are being recomputed.
- Use the remove button to take the template off the page with jQuery. Now, when you click a the button, one of the computations still displays.
