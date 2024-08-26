import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlayCircle } from '@sebgroup/green-core/components/icon/icons/play-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PlayCircle = createComponent({
  tagName: getScopedTagName('gds-icon-play-circle'),
  elementClass: IconPlayCircle,
  react: React
})
