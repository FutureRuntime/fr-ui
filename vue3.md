# Migrate from V1

## General Breaking Changes

- css
  - css index `naive-ui/lib|es/styles/index.css` has been removed, do not import it any more!
- fonts
  - `naive-ui/lib|es/styles/fonts/*` has been removed, use [vfonts](https://www.npmjs.com/package/vfonts)
- icons

  - `naive-ui/lib|es/icons/*` is deprecated (vue-loader is required).
  - `naive-ui/lib|es/icons/*` is removed since v2.10.0
  - use [xicons](https://github.com/07akioni/xicons) instead.

- `n-nimbus-icon` is moved to `naive-ui/compat/nimbus-icon` (vue-loader is required) `n-nimbus-icon` is removed since v2.10.0
- `n-nimbus-form-card` is removed
- locale & theme on `n-config-provider` doesn't accept string any more (not it accepts object).

## Components

- [x] form
  - form-item
    - new
      - `show-feedback` prop
- [x] affix
  - deprecate
    - `target` => `listen-to`
- [x] alert
- [x] anchor
  - new
    - `show-rail` props
    - `show-background` props
  - deprecate
    - `target` => `listen-to`
- [x] auto-complete
  - break
    - `v-model` => `v-model:value`
  - deprecate
    - `on-input` => `on-update:value`
  - new
    - `on-blur`
    - `on-focus`
- [x] avatar
- [x] back-top
  - new
    - `show` controlled show
    - `on-update:show`
    - `to` teleport target
  - deprecate
    - `on-show` => `on-update:show`
    - `on-hide` => `on-update:show`
    - `target` => `listen-to`
- [x] badge
- [x] breadcrumb
- [x] button
- [x] button-group
- [x] card
- [x] cascader
  - break
    - `v-model` => `v-model:value`
    - `on-load` has different usage
    - `leaf-only` has different meaning
  - new
    - `cascade` prop
    - `show-path` prop
    - `default-value` prop
  - deprecated
    - `on-change` => `on-update:value`
- [x] checkbox
  - checkbox
    - break
      - `value` only supports `string`
    - deprecate
      - `on-change` => `on-update:checked`
    - new
      - `default-checked` prop
  - checkbox-group
    - break
      - `value` only supports `string` or `null`
    - deprecate
      - `on-change` => `on-update:value`
- [x] code
- [x] collapse
  - deprecate
    - `on-expanded-names-change` => `on-update:expanded-names`
  - removed
    - `v-model` => `v-model:expanded-names`
- [x] config-consumer (deprecated)
- [x] config-provider
  - break
    - `theme` use new theme from naive export
    - `$NOs.theme` => `useOsTheme`
    - `theme` => `legacy-theme`
  - deprecate
    - `as` => `tag`
    - `styleScheme` won't working in next version
  - new
    - `date-locale` prop
    - `locale` prop
    - provide `useOsTheme` hook
- [x] confirm => `dialog`
  - break
    - rename `confirm` to `dialog`
  - remove
    - `$NConfirm`, `$NModal` => `useDialog`
- [x] data-table
  - deprecate
    - `on-filters-change` => `on-update:filters`
    - `on-sorter-change` => `on-update:sorter`
    - `on-checked-row-keys-change` => `on-update:checked-row-keys`
    - `on-page-change` => `on-update:page`
    - `on-page-size-change` => `on-update:page-size`
- [x] date-picker
  - break
    - `v-model` => `v-model:value`
  - deprecate
    - `on-change` => `on-update:value`
  - new
    - `default-value` prop
- [x] descriptions
- [x] divider
- [x] drawer
  - break
    - `v-model`
  - deprecate
    - `on-show` => `on-update:show`
    - `on-hide` => `on-update:show`
    - `target` => `to`
    - `drawer-class` => `class`
    - `drawer-style` => `style`
  - new
    - `display-directive` prop
- [x] dropdown
  - break
    - `option.value` => `option.key`
    - item must have unique key
    - submenu must have unique key
  - remove
    - `submenu-width`
    - `submenu-min-width`
    - `submenu-max-width`
  - new
    - `option.icon`
- [x] dynamic-input
  - break
    - `v-model` => `v-model:value`
    - `on-clear` is removed
  - deprecate
    - `on-input` => `on-update:value`
  - new
    - `item-style` prop
    - `min` prop
    - `default-value` prop
- [x] dynamic-tags
  - break
    - `v-model` => `v-model:value`
- [x] element
- [x] empty
- [x] gradient-text
- [x] grid
- [x] icon
- [x] input
  - break
    - `v-model` => `v-model:value`
  - new
    - `on-update:value` prop
    - `default-value` prop
- [x] input-group
- [x] input-group-label
- [x] input-number
  - deprecate
    - `on-change` => `on-update:value`
  - new
    - `default-value` prop
- [x] layout
  - layout-content, layout
    - breaking `use-native-scrollbar` => `native-scrollbar`
  - layout-sider
    - breaking `use-native-scrollbar` => `native-scrollbar`
    - deprecate
      - `on-expand` => `on-update:collapsed`
      - `on-collapse` => `on-update:collapsed`
- [x] list
- [x] loading-bar
  - remove
    - `$NLoadingBar`
  - new
    - `useLoadingBar`
    - `n-loading-bar-provider`
- [x] log
  - deprecate
    - `scrollToTop` => `scrollTo`
    - `scrollToBottom` => `scrollTo`
- [x] menu
  - deprecate
    - `on-expanded-names-change` => `on-update:expanded-keys`
    - `on-select` => `on-update:value`
    - `expanded-names` => `expanded-keys`
    - `default-expanded-names` => `default-expanded-keys`
    - `item.name` => `item.key`
  - remove
    - `item.titleExtra`
    - `overlay-width`
    - `overlay-min-width`
- [x] message
  - rewrite message using `n-message-provider`
  - new
    - `useMessage`
  - deprecate
    - `onHide` => `onLeave`
    - `onAfterHide` => `onAfterLeave`
  - remove
    - `message.hide` => `message.destroy`
- [x] modal
  - rewrite with teleport
  - new
    - `display-directive`
  - deprecate
    - `v-model`
    - `on-show` => `on-update:show`
    - `on-hide` => `on-update:show`
    - `overlay-style` => `style`
  - remove
    - default hide behavior for preset
- [x] notification
  - new
    - `useNotification`
  - deprecate
    - `open` => `create`
    - `onHide` => `onLeave`
    - `onAfterShow` => `onAfterEnter`
    - `onAfterHide` => `onAfterHide`
- [x] pagination
  - deprecate
    - `on-change` => `on-update:page`
    - `on-page-size-change` => `on-update:page-size`
- [x] popconfirm
- [x] popover
  - new
    - `default-show`
    - `overlap`
  - deprecate
    - `#activator` => `#trigger`
    - `overlay-xxx` => `body-xxx`
  - remove
    - `controller`
    - `max-width`
    - `width`
    - `min-width`
    - `manual` trigger is removed, use `show` to controll the popover
    - `body-class`, use `class` instead
    - `body-style`, use `style` instead
- [x] popselect
  - break
    - `v-model` => `v-model:value`
  - deprecate
    - `on-change` => `on-update:value`
- [x] progress
- [x] radio
  - radio-group
    - break
      - default `size` `'small'` => `'medium'`
      - value only supports `string` or `null`
    - deprecate
      - `on-change` => `on-update:value`
  - radio & radio-button
    - break
      - value only supports `string`
      - `checked-value` => `checked`
        - It is change to conform html standard usage
      - `on-change` => `on-update:checked`
        - `on-change` is now a native event
- [x] result
- [x] scrollbar
- [x] select
  - break
    - `v-model` => `v-model:value`
    - `on-scroll(event, container, content)` => `on-scroll(event)`
    - `option.render(h, data)` => `option.render(data)`
  - deprecated
    - `on-change` => `on-update:value`
- [x] slider
  - deprecated
    - `on-change` => `on-update:value`
  - new
    - `default-value` prop
  - bug
    - vue refs https://github.com/vuejs/vue-next/issues/2283
    - drag logic
- [x] space
- [x] spin
  - breaking
    - `'in-small'`, `'in-medium'` and `'in-large'` size are removed
  - deprecate
    - `spinning` => `show`
- [x] statistic
- [x] steps
- [x] switch
  - remove
    - `value` => `value`
    - `change` => `on-update:value`
- [x] table
- [x] tabs
  - deprecate
    - `active-name` => `value`
    - `on-active-name-change` => `on-update:value`
- [x] tag
  - break
    - `v-model` => `v-model:value`
  - deprecate
    - `on-checked-change` => `on-update:checked`
- [x] thing
- [x] time
  - break
    - `type` default from `'relative'` to `'date-time'`
- [x] time-picker
  - break
    - `v-model` => `v-model:value`
- [x] timeline
- [x] tooltip
  - deprecate
    - `#activator` => `#trigger`
- [x] transfer
  - break
    - `v-model` => `v-model:value`
  - deprecate
    - `on-change` => `on-update:value`
  - new
    - `default-value` prop
- [x] tree
  - break
    - `v-model` => `v-model:selected-keys`
  - deprecate
    - `on-selected-keys-change` => `on-update:selected-keys`
    - `on-checked-keys-change` => `on-update:checked-keys`
    - `on-expanded-keys-change` => `on-update:expanded-keys`
- [x] typography
  - breaking
    - text, p
      - `depth` from `primary` ... `tertiary` => `1`, `2`, `3`
  - deprecate
    - text
      - `as` => `tag`
- [x] upload
- [x] nimbus-service-layout

  - breaking
    - `v-model` => `v-model:value`

- TODO
  - [x] vooks
  - [x] icons from `vicons`
  - [x] fonts from `vfonts`
  - [x] vite-build
  - [x] rollup-build
    - [x] wait for new version of rollup-plugin-vue, https://github.com/vuejs/rollup-plugin-vue/issues/408
  - tusimple theme
  - [x] clean delegate
  - [x] site production tag (bug)
  - [x] demo scrollbar ?????????
  - [x] table x scroll ?????????????????????
  - [x] log scrollTo ????????????
  - [x] remove hollowoutable
  - [x] styleScheme, css variables ??????
    - ??????????????????
  - [x] use-global-style ? ???????????????????????????????????????????????????????????????????????????????????????????????????????????? vue ????????????????????? install
  - [x] dynamic-input, no value
  - [x] button, input ??? css ???????????????????????????
  - [x] test rollup treeshaking
  - [x] test webpack treeshaking
  - [x] menu utils render
  - [x] dialog bug
  - [x] data-table css vars
  - [x] typography css vars
  - [x] spin css vars
  - [x] radio css vars
  - [x] checkbox css vars
  - [x] avatar css vars
  - [x] landing page icon
  - [x] switch styles
  - [x] slider styles
  - [x] drawer api
  - [x] chrome date-picker overflow (focus({ preventScroll }))
  - [x] slider ???????????????????????????????????? tooltip...
  - [x] transfer ?????????????????????
  - [x] side effects = false ??????????????? rollup ????????????????????????????????????????????? css ??????????????????????????? JS ?????????????????????????????????????????????????????? fonts ????????????????????????????????????????????? https://github.com/rollup/plugins/issues/692
  - [x] vue ??? $attrs ???????????? dev ??? prod ??????????????? https://github.com/vuejs/vue-next/issues/2741
  - [x] date-picker input ??? clear ???????????????????????????????????? vue ??? bug
    - https://github.com/vuejs/vue-next/issues/2768
  - [x] radio-group ????????????????????????????????? vue ??? bug
    - https://github.com/vuejs/vue-next/issues/2829
  - [x] cascader demo async ????????????????????????demo ???????????????
  - [x] gradient-text transition ?????????
  - [x] md-loader code
  - [x] input + form-item style
  - [x] loadingbar theme
  - [x] dropdown group + menu use dropdown
  - [x] ?????? message
  - [x] progress height
  - [x] close ??????
  - [x] data-table, radio style ??????
  - [x] message icon style
  - [x] transfer search icon style
  - [x] base selection icon style
  - [x] date picker not working
  - [x] avatar font size bug
  - [x] handle global style
    - ???????????? useTheme + useStyle ???... ???????????????????????????????????????????????????????????????????????????
  - [x] select menu padding top & bottom
  - [x] time-picker invalid
  - [x] date-picker invalid
  - [x] vooks `useNow`
  - [x] treemate activePath includeGroup: false
  - [x] ?????? dateFns locale => dateLocale
  - [x] ?????????????????? demo ?????? src ??????
  - [x] ??????????????? mixin
  - [x] form item default type explain
  - [x] selection focus style
  - [x] refactor site use store!!! singleton
  - [x] ????????????????????????
  - [x] ???????????? demo ??????
  - [x] anchor bug???
  - [x] getKey select & autocomplete type safe & input event interface? onInput value | null or value
  - [x] vshow (maybe create a vue pr)
  - [x] jsx focusin out (waiting for vue update)
  - [x] inject key & value in type (I should use InjectionKey...)
  - [x] form item no label css
  - [x] unify treemate ignored
  - [x] fix menu extra
  - [x] build icon
  - [x] compat
  - [x] fix upload dragger
  - [x] fix table sorter
  - [x] tree ????????????????????? demo
  - [x] table treemate!!!
  - [x] createTheme
  - [x] build site
  - [x] table fixed col
  - [ ] prefixCls??????????????????
  - [x] ?????????????????? props
  - [x] ?????????????????????
  - [ ] on update value api
  - [x] anchor in modal page, maybe a bug of vue...
  - [ ] menu + dropdown collapsed ?????? menu item ????????????selected ????????? useMemo ????????? computed??????????????????, Vue ??????????????????????????? bug???????????????????????????...???
  - [ ] select menu multiple, when show=true, checkmark transiton not working???????????? vue ??? bug???
  - [ ] demo hmr ???????????? vite-plugin-vue ??? vite ??? bug???????????????????????????
  - [x] ?????????????????? demo ??? highlight code???????????????????????????????????????
  - [x] fix input textarea clear...
  - [x] input auto size
  - [x] data table custom render sorter
  - [x] upload retry
  - [x] table bottom-bordered
  - [x] data table filter menu
  - [x] popover default trigger
  - [x] select option type
  - [x] <del>popover after enter ?????????????????????</del> ??? duration ??? delay ????????????????????????????????????????????????????????????
  - [x] popover width
  - [ ] selection popover ??????
  - [x] card ????????????
  - [x] dropdown ??????????????? bug???mousemoveoutside
  - [x] select menu loading
  - [x] refactor layout to make position work on first shot
  - [x] <del>mention mention pending option not correct, sometimes it is not the first option</del> In fact it's caused by mouse hover on item...
  - [x] code Deprecated as of 10.7.0. highlight(lang, code, ...args) has been deprecated.
  - [x] vdirs zindexable https://github.com/vuejs/vue-next/issues/3497
  - [x] collapse-item overflow
  - [x] anchor ignore gap ??? bug
  - [x] popover click ??????????????????
  - [ ] menu path ???????????????
  - [x] debug anchor ???????????? link
  - [x] popover inst methods
  - [x] ios ????????? demo code font size ??????
  - [x] <del>table overflow bordered</del>
  - [x] table ellipisis vertical align
  - [x] form item grid item
  - [x] select filter composite...
  - [x] ??????????????? select ??????
  - [ ] make eslint work with markdown ts

## Build

package: tsx => es|lib => terse cssr => replace global vars => release

site: build package => move to node_modules => setup side effects => vite build => release

## Info

https://github.com/vuejs/vue-next/issues/2549 last cherry-picked commit: 6560ae34d71b81d584af79f810cb9dfa87119d1a
