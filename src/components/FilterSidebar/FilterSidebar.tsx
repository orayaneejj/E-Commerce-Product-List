import { Box, Flex, Heading, Button, Input, Stack } from "@chakra-ui/react";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "@/components/ui/slider";
import "../FilterSidebar/FilterSidebar.scss";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../ui/accordion";
import { Radio, RadioGroup } from "../ui/radio";
import { Rating } from "../ui/rating";
import { useState } from "react";

export function FilterSidebar() {
  const [value, setValue] = useState<number[]>([50]);
  const minValue: number = 0; // Minimum value
  const maxValue: number = 200; // Maximum value

  return (
    <Box
      className="filter-sidebar"
      w="300px"
      p="4"
      borderRadius="md"
      borderWidth="1px"
    >
      {" "}
      {/* Header */}
      <Flex
        className="filter-sidebar__header"
        justify="space-between"
        align="center"
        mb="4"
      >
        <Heading size="md">Filters</Heading>
        <Button size="sm" variant="outline" className="button-clear">
          Clear All
        </Button>
      </Flex>
      <AccordionRoot
        multiple
        defaultValue={["category", "ratings", "brand", "price", "size"]}
      >
        {/* Category Filter */}
        <AccordionItem value="category">
          <AccordionItemTrigger>Category</AccordionItemTrigger>
          <AccordionItemContent>
            <div className="filter-container">
              <Stack className="filter-container__checkbox">
                <Checkbox>Man</Checkbox>
                <Checkbox>Woman</Checkbox>
                <Checkbox>Kid</Checkbox>
                <Checkbox>Casual</Checkbox>
                <Checkbox>Sport</Checkbox>
                <Checkbox>Rainbow</Checkbox>
              </Stack>
              <Stack className="filter-container__amount">
                <span>(12)</span>
                <span>(23)</span>
                <span>(18)</span>
                <span>(67)</span>
                <span>(34)</span>
                <span>(12)</span>
              </Stack>
            </div>
          </AccordionItemContent>
        </AccordionItem>

        {/* Ratings Filter */}
        <AccordionItem value="ratings">
          <AccordionItemTrigger>Ratings</AccordionItemTrigger>
          <AccordionItemContent>
            <div className="filter-container">
              <RadioGroup defaultValue="4.0" variant="outline">
                <Stack className="filter-container__radio">
                  <Radio value="4.5">
                    <Stack direction="row">
                      <Rating
                        readOnly
                        allowHalf
                        defaultValue={4.5}
                        size="sm"
                        colorPalette="yellow"
                      />
                      <span>4.5 & up</span>
                    </Stack>
                  </Radio>

                  <Radio value="4.0">
                    <Stack direction="row">
                      <Rating
                        readOnly
                        allowHalf
                        defaultValue={4.0}
                        size="sm"
                        colorPalette="yellow"
                      />
                      <span>4.0 & up</span>
                    </Stack>
                  </Radio>

                  <Radio value="3.5">
                    <Stack direction="row">
                      <Rating
                        readOnly
                        allowHalf
                        defaultValue={3.5}
                        size="sm"
                        colorPalette="yellow"
                      />
                      <span>3.5 & up</span>
                    </Stack>
                  </Radio>

                  <Radio value="3.0">
                    <Stack direction="row">
                      <Rating
                        readOnly
                        allowHalf
                        defaultValue={3.0}
                        size="sm"
                        colorPalette="yellow"
                      />
                      <span>3.0 & up</span>
                    </Stack>
                  </Radio>
                </Stack>
              </RadioGroup>
              <Stack className="filter-container__amount">
                <span>(1991)</span>
                <span>(200)</span>
                <span>(300)</span>
                <span>(500)</span>
              </Stack>
            </div>
          </AccordionItemContent>
        </AccordionItem>

        {/* Brand Filter*/}
        <AccordionItem value="brand">
          <AccordionItemTrigger>Brand</AccordionItemTrigger>
          <AccordionItemContent>
            <Stack>
              <Checkbox>Adidas (18)</Checkbox>
              <Checkbox>Nick (11)</Checkbox>
              <Checkbox>Jacek & Co (12)</Checkbox>
              <Checkbox>My Shooed (67)</Checkbox>
              <Checkbox>Florida Fox (34)</Checkbox>
            </Stack>
          </AccordionItemContent>
        </AccordionItem>
        {/*Price Filter*/}
        <AccordionItem value="price">
          <AccordionItemTrigger>Price</AccordionItemTrigger>
          <AccordionItemContent>
            <Stack gap="5">
              <Slider
                width="265px"
                size="sm"
                value={value}
                min={minValue}
                max={maxValue}
                onValueChange={(e) => setValue(e.value)}
              />
              <Stack direction={{ base: "row" }} gap="8">
                <Input placeholder="0" width={20} borderRadius={10} size="sm" />
                <Input
                  placeholder="60"
                  width={20}
                  borderRadius={10}
                  size="sm"
                  value={`$${Number(value)}`}
                />
              </Stack>
            </Stack>
          </AccordionItemContent>
        </AccordionItem>
        {/*Size Filter*/}
        <AccordionItem value="size">
          <AccordionItemTrigger>Size</AccordionItemTrigger>
          <AccordionItemContent>
            <Stack gap="5">
              <Slider width="265px" defaultValue={[30, 60]} size="sm" />
              <Stack direction={{ base: "row" }} gap="8">
                <Input placeholder="0" width={20} borderRadius={10} size="sm" />
                <Input placeholder="0" width={20} borderRadius={10} size="sm" />
              </Stack>
            </Stack>
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>
    </Box>
  );
}
