# CHANGELOG

## v0.5.0 2021-02-28
  * Update populated systems and station models to meet EDDB model v6
    * Properties `state` and `state_id` have been removed from table `minor_faction`.
    * Properties `state` and `state_id` have been removed from `station`.
    * Property states and `state_id` has been added to `station`.
    * Properties `state` and `state_id` have been removed from `system`.
    * Property `states` has been added to `system`.
    * Property `state` has been removed from `system.minor_faction_presences`.
    * Property `happiness_id` has been added to `system.minor_faction_presences`.
    * Properties `active_states`, `pending_states` and `recovering_states` have been added to `system.minor_faction_presences`.

## v0.4.4 - v0.4.7 2021-02-28
  * Poke versions

## v0.4.3 2021-02-28
  * Update package name to include the scope

## v0.4.2 2021-02-28
  * Update URLs to EDDB v6
  * Upgrade dependencies to solve security alerts

## v0.4.1 2019-11-03
Upgrade dependencies for security warnings:

  * mixin-deep
  * eslint-utils
  * lodash
  * js-yaml
  * handlebars

## v0.4.0 2018-12-18
  * Add `StationsLoader` adapter class.

## v0.3.0 2018-11-14
  * Add `PricesLoader` adapter class.

## v0.2.0 2018-11-12
  * Add `PopulatedSystemsLoader` adapter class.

## v0.1.0 2018-11-05
  * Add `CommoditiesLoader` adapter class.
