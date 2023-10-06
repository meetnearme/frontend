"use client"

import { Portal, Select } from '@ark-ui/react'

import { cva, css } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"


export const Basic = () => {
  const items = ['React', 'Solid', 'Vue']
  return (
    <Select.Root items={items}>
      <Select.Label>Select Label</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.Value placeholder="Select a Framework" />
        </Select.Trigger>
        <Select.ClearTrigger className={css({
          ml: "10",
          color: "gray"
        })}>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}