package com.example.trymatch.controller;


import com.example.trymatch.travel.TravelDTO;
import com.example.trymatch.travel.TravelService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
public class TravelController {

    private final TravelService travelService;

    @GetMapping("/api/map")
    public ArrayList<TravelDTO> getTravelData() throws ParseException {
        return travelService.callTravelData("areaBasedList", "","5");
    }
}