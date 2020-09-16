/**
---
name: "Platformer"
props:
  minWalkVel:
    l10n: LABEL_MIN_WALK_VELOCITY
    type: UWORD
    input: slider
    default: 0x130
    min: 0
    max: 0x600
  maxWalkVel:
    l10n: LABEL_MAX_WALK_VELOCITY
    type: UWORD
    input: slider
    default: 0x1900
    min: 0
    max: 0xFFFF   
---
*/
#ifndef STATE_PLATFORM_H
#define STATE_PLATFORM_H

#include <gb/gb.h>

void Start_Platform();
void Update_Platform();

extern WORD pl_vel_x;
extern WORD pl_vel_y;
extern WORD pl_pos_x;

/**
 * @gbsexport
 * @l10n LABEL_MIN_WALK_VELOCITY
 * @input slider
 * @default 0x130
 * @min 0
 * @max 0x600
 */
extern WORD pl_pos_y;



#endif
