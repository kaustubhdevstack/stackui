const express = require('express');
const router = express.Router();

//Main pages
router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/changelog', (req, res) => res.render('changelog'));
router.get('/join_us', (req, res) => res.render('join'));
router.get('/hall_of_fame', (req, res) => res.render('sponsor'));
router.get('/legal', (req, res) => res.render('legal'));
router.get('/faq', (req, res) => res.render('faq'));
router.get('/contact_us', (req, res) => res.render('contact'));

//Sub Pages
router.get('/backers', (req, res) => res.render('backers'));
router.get('/maintainers', (req, res) => res.render('maintainers'));
router.get('/team', (req, res) => res.render('team'));

//Stack UI Components and Elements
router.get('/bootstrap_colors', (req, res) => res.render('basic/bcolors'));
router.get('/material_colors', (req, res) => res.render('basic/mdcolors'));
router.get('/bulma_colors', (req, res) => res.render('basic/bulmacolors'));
router.get('/tailwind_colors', (req, res) => res.render('basic/tailwindcolors'));
router.get('/numorphic_colors', (req, res) => res.render('basic/numorphiccolors'));
router.get('/gradient_colors', (req, res) => res.render('basic/gradientcolors'));
router.get('/emojis', (req, res) => res.render('basic/emojis'));
router.get('/symbols', (req, res) => res.render('basic/symbols'));
router.get('/font_combine', (req, res) => res.render('basic/fontcombine'));
router.get('/type_effects', (req, res) => res.render('basic/typeeffects'));
router.get('/box_shadows', (req, res) => res.render('basic/boxshadow'));
router.get('/text_gradients', (req, res) => res.render('basic/textgradients'));
router.get('/ui_components', (req, res) => res.render('basic/uicomponents'));
router.get('/react_components', (req, res) => res.render('react/reactcomponents'));
router.get('/vue_components', (req, res) => res.render('vue/vuecomponents'));
router.get('/angular_components', (req, res) => res.render('angular/angularcomponents'));

//HTML CSS and JavaScript based UI components
router.get('/accordions', (req, res) => res.render('basic/uiparts/accordions'));
router.get('/alerts', (req, res) => res.render('basic/uiparts/alerts'));
router.get('/buttons', (req, res) => res.render('basic/uiparts/buttons'));
router.get('/navigations', (req, res) => res.render('basic/uiparts/navigation'));
router.get('/pagination', (req, res) => res.render('basic/uiparts/pagination'));
router.get('/lists', (req, res) => res.render('basic/uiparts/list'));
router.get('/cards', (req, res) => res.render('basic/uiparts/card'));
router.get('/modals', (req, res) => res.render('basic/uiparts/modals'));
router.get('/tabs', (req, res) => res.render('basic/uiparts/tabs'));
router.get('/forms', (req, res) => res.render('basic/uiparts/forms'));
router.get('/notices', (req, res) => res.render('basic/uiparts/notices'));
router.get('/sliders', (req, res) => res.render('basic/uiparts/sliders'));
router.get('/tables', (req, res) => res.render('basic/uiparts/tables'));
router.get('/footers', (req, res) => res.render('basic/uiparts/footers'));
router.get('/helpers', (req, res) => res.render('basic/uiparts/helpers'));

module.exports = router;