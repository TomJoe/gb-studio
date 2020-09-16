import { createSlice } from "@reduxjs/toolkit";

export type EnginePropCType = "UBYTE" | "UWORD" | "BYTE" | "WORD";

export type EnginePropSchemaField = {
  key: string;
  name: string;
  type: EnginePropCType;
  defaultValue: any;
};

export type EnginePropSchemaGroup = {
  name: string;
  fields: EnginePropSchemaField[];
};

export interface EngineState {
  schema: EnginePropSchemaGroup[];
}

export const initialState: EngineState = {
  schema: [
    {
      name: "Platform",
      fields: [
        {
          key: "minWalkVel",
          name: "MIN_WALK_VEL",
          type: "WORD",
          defaultValue: 0x130
        },
        {
          key: "maxWalkVel",
          name: "MAX_WALK_VEL",
          type: "WORD",
          defaultValue: 0x1900
        },
      ],
    },
    {
      name: "Test Group",
      fields: [
        {
          key: "testValue",
          name: "TEST",
          type: "UBYTE",
          defaultValue: 0
        },
      ],
    },
  ],
};

const engineSlice = createSlice({
  name: "engine",
  initialState,
  reducers: {},
});

const { reducer } = engineSlice;

export default reducer;
